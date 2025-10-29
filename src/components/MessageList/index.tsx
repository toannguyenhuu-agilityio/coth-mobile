import { ReactNode, useRef, useEffect } from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Text,
  ScrollView,
  Image,
  ImageSourcePropType,
} from 'react-native';

export type MessageType = 'user' | 'assistant' | 'system';

export interface Message {
  id: string;
  type: MessageType;
  content: string;
  timestamp?: Date | string;
  avatar?: ImageSourcePropType;
  senderName?: string;
}

export interface MessageListProps {
  /** Array of messages to display */
  messages: Message[];
  /** Background color of the message list */
  backgroundColor?: string;
  /** User message bubble color */
  userMessageColor?: string;
  /** Assistant message bubble color */
  assistantMessageColor?: string;
  /** System message color */
  systemMessageColor?: string;
  /** Auto scroll to bottom on new messages */
  autoScrollToBottom?: boolean;
  /** Custom message renderer */
  renderMessage?: (message: Message, index: number) => ReactNode;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Content container style */
  contentContainerStyle?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Message list component with scrollable chat messages */
export const MessageList = ({
  messages,
  backgroundColor = '#000000',
  userMessageColor = 'rgba(116, 139, 145, 0.3)',
  assistantMessageColor = 'rgba(60, 60, 67, 0.6)',
  systemMessageColor = 'rgba(255, 255, 255, 0.1)',
  autoScrollToBottom = true,
  renderMessage,
  style,
  contentContainerStyle,
  testID = 'message-list',
}: MessageListProps) => {
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (autoScrollToBottom && messages.length > 0) {
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  }, [messages, autoScrollToBottom]);

  const getMessageBubbleColor = (type: MessageType) => {
    switch (type) {
      case 'user':
        return userMessageColor;
      case 'assistant':
        return assistantMessageColor;
      case 'system':
        return systemMessageColor;
      default:
        return assistantMessageColor;
    }
  };

  const getMessageAlignment = (type: MessageType) => {
    return type === 'user' ? 'flex-end' : 'flex-start';
  };

  const formatTimestamp = (timestamp?: Date | string) => {
    if (!timestamp) return '';
    const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const renderDefaultMessage = (message: Message, index: number) => {
    const isUser = message.type === 'user';
    const isSystem = message.type === 'system';

    if (isSystem) {
      return (
        <View key={message.id || index} style={styles.systemMessageContainer}>
          <View
            style={[
              styles.systemMessageBubble,
              { backgroundColor: getMessageBubbleColor(message.type) },
            ]}
          >
            <Text style={styles.systemMessageText}>{message.content}</Text>
          </View>
        </View>
      );
    }

    return (
      <View
        key={message.id || index}
        style={[styles.messageContainer, { alignItems: getMessageAlignment(message.type) }]}
        testID={`${testID}-message-${index}`}
      >
        {!isUser && message.avatar && <Image source={message.avatar} style={styles.avatar} />}
        <View style={styles.messageContent}>
          {!isUser && message.senderName && (
            <Text style={styles.senderName}>{message.senderName}</Text>
          )}
          <View
            style={[
              styles.messageBubble,
              isUser ? styles.userBubble : styles.assistantBubble,
              { backgroundColor: getMessageBubbleColor(message.type) },
            ]}
          >
            <Text style={[styles.messageText, isUser ? styles.userText : styles.assistantText]}>
              {message.content}
            </Text>
          </View>
          {message.timestamp && (
            <Text style={[styles.timestamp, isUser && styles.timestampRight]}>
              {formatTimestamp(message.timestamp)}
            </Text>
          )}
        </View>
        {isUser && message.avatar && <Image source={message.avatar} style={styles.avatar} />}
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor }, style]} testID={testID}>
      <ScrollView
        ref={scrollViewRef}
        style={styles.scrollView}
        contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((message, index) =>
          renderMessage ? renderMessage(message, index) : renderDefaultMessage(message, index),
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    gap: 16,
  },
  messageContainer: {
    flexDirection: 'row',
    gap: 8,
    maxWidth: '85%',
  },
  messageContent: {
    flex: 1,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  senderName: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 4,
    marginLeft: 4,
  },
  messageBubble: {
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  userBubble: {
    borderTopRightRadius: 4,
  },
  assistantBubble: {
    borderTopLeftRadius: 4,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 20,
  },
  userText: {
    color: '#FFFFFF',
  },
  assistantText: {
    color: '#FFFFFF',
  },
  timestamp: {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 11,
    marginTop: 4,
    marginLeft: 4,
  },
  timestampRight: {
    textAlign: 'right',
    marginRight: 4,
    marginLeft: 0,
  },
  systemMessageContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  systemMessageBubble: {
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  systemMessageText: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 12,
    textAlign: 'center',
  },
});
