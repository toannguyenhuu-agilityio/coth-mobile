import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';

export interface ConversationMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp?: Date | string;
}

export interface Source {
  id: string;
  title: string;
  subtitle?: string;
  icon?: ImageSourcePropType;
  url?: string;
  onPress?: () => void;
}

export interface ChatConversationProps {
  /** Array of conversation messages */
  messages: ConversationMessage[];
  /** Array of sources */
  sources?: Source[];
  /** Show sources section */
  showSources?: boolean;
  /** Sources expanded state */
  sourcesExpanded?: boolean;
  /** Toggle sources expansion */
  onToggleSources?: () => void;
  /** Background color */
  backgroundColor?: string;
  /** User message color */
  userMessageColor?: string;
  /** Assistant message color */
  assistantMessageColor?: string;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Chat conversation component with messages and sources */
export const ChatConversation = ({
  messages,
  sources = [],
  showSources = true,
  sourcesExpanded = false,
  onToggleSources,
  backgroundColor = '#000000',
  userMessageColor = 'rgba(58, 58, 60, 0.8)',
  assistantMessageColor = 'rgba(58, 58, 60, 0.8)',
  style,
  testID = 'chat-conversation',
}: ChatConversationProps) => {
  const renderMessage = (message: ConversationMessage, index: number) => {
    const isUser = message.type === 'user';

    return (
      <View
        key={message.id || index}
        style={[
          styles.messageContainer,
          isUser ? styles.userMessageContainer : styles.assistantMessageContainer,
        ]}
        testID={`${testID}-message-${index}`}
      >
        <View
          style={[
            styles.messageBubble,
            isUser
              ? [styles.userBubble, { backgroundColor: userMessageColor }]
              : [styles.assistantBubble, { backgroundColor: assistantMessageColor }],
          ]}
        >
          <Text style={styles.messageText}>{message.content}</Text>
        </View>
      </View>
    );
  };

  const renderSources = () => {
    if (!showSources || sources.length === 0) return null;

    return (
      <View style={styles.sourcesSection} testID={`${testID}-sources`}>
        <TouchableOpacity
          style={styles.sourcesHeader}
          onPress={onToggleSources}
          testID={`${testID}-sources-toggle`}
        >
          <View style={styles.sourcesHeaderLeft}>
            <Text style={styles.sourcesIcon}>👍</Text>
            <Text style={styles.sourcesIcon}>👎</Text>
            <Text style={styles.sourcesTitle}>Sources</Text>
          </View>
          <Text style={styles.sourcesChevron}>{sourcesExpanded ? '︿' : '﹀'}</Text>
        </TouchableOpacity>

        {sourcesExpanded && (
          <View style={styles.sourcesList}>
            {sources.map((source, index) => (
              <TouchableOpacity
                key={source.id || index}
                style={styles.sourceItem}
                onPress={source.onPress}
                testID={`${testID}-source-${index}`}
              >
                <View style={styles.sourceIcon}>
                  {source.icon ? (
                    <Image source={source.icon} style={styles.sourceIconImage} />
                  ) : (
                    <View style={styles.sourceIconPlaceholder}>
                      <Text style={styles.sourceIconText}>📖</Text>
                    </View>
                  )}
                </View>
                <View style={styles.sourceContent}>
                  <Text style={styles.sourceTitle} numberOfLines={1}>
                    {source.title}
                  </Text>
                  {source.subtitle && (
                    <Text style={styles.sourceSubtitle} numberOfLines={1}>
                      {source.subtitle}
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={[styles.container, { backgroundColor }, style]} testID={testID}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {messages.map((message, index) => renderMessage(message, index))}
        {renderSources()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },
  messageContainer: {
    width: '100%',
  },
  userMessageContainer: {
    alignItems: 'flex-end',
  },
  assistantMessageContainer: {
    alignItems: 'flex-start',
  },
  messageBubble: {
    maxWidth: '90%',
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
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '400',
  },
  sourcesSection: {
    marginTop: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(58, 58, 60, 0.6)',
    overflow: 'hidden',
  },
  sourcesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  sourcesHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sourcesIcon: {
    fontSize: 16,
  },
  sourcesTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  sourcesChevron: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  sourcesList: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  sourceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  sourceIcon: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sourceIconImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  sourceIconPlaceholder: {
    width: 48,
    height: 48,
    borderRadius: 8,
    backgroundColor: 'rgba(116, 139, 145, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sourceIconText: {
    fontSize: 24,
  },
  sourceContent: {
    flex: 1,
    justifyContent: 'center',
  },
  sourceTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 2,
  },
  sourceSubtitle: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 13,
    fontWeight: '400',
  },
});
