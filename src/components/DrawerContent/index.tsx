import { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { Icon } from '../common/Icon';

export interface DrawerItem {
  id: string;
  title: string;
  onPress?: () => void;
  onMenuPress?: () => void;
}

export interface DrawerContentProps {
  /** Logo image source */
  logoSource?: ImageSourcePropType;
  /** Logo text if no image provided */
  logoText?: string;
  /** Handler for close button */
  onClose?: () => void;
  /** Handler for new chat button */
  onNewChat?: () => void;
  /** Handler for search chat button */
  onSearchChat?: () => void;
  /** List of chat items */
  chatItems?: DrawerItem[];
  /** Custom header content */
  headerContent?: ReactNode;
  /** Background color */
  backgroundColor?: string;
  /** Container style */
  style?: StyleProp<ViewStyle>;
  /** Test ID */
  testID?: string;
}

/** Drawer content component for side navigation */
export const DrawerContent = ({
  logoSource,
  logoText = 'LORD OF THE HEART',
  onClose,
  onNewChat,
  onSearchChat,
  chatItems = [],
  headerContent,
  backgroundColor = '#1C1C1E',
  style,
  testID = 'drawer-content',
}: DrawerContentProps) => {
  const renderHeader = () => {
    if (headerContent) {
      return <View style={styles.header}>{headerContent}</View>;
    }

    return (
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          {logoSource ? (
            <Image
              source={logoSource}
              style={styles.logoImage}
              resizeMode="contain"
              testID={`${testID}-logo`}
            />
          ) : (
            <View style={styles.logoTextContainer}>
              <Icon name="heart" size={24} color="#FFFFFF" />
              <Text style={styles.logoText}>{logoText}</Text>
            </View>
          )}
        </View>
        <TouchableOpacity
          onPress={onClose}
          style={styles.closeButton}
          testID={`${testID}-close-button`}
        >
          <Icon name="close" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    );
  };

  const renderActionButtons = () => (
    <View style={styles.actionsContainer}>
      <TouchableOpacity
        onPress={onNewChat}
        style={styles.actionButton}
        testID={`${testID}-new-chat-button`}
      >
        <View style={styles.actionIcon}>
          <Text style={styles.actionIconText}>✎</Text>
        </View>
        <Text style={styles.actionText}>New Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onSearchChat}
        style={styles.actionButton}
        testID={`${testID}-search-chat-button`}
      >
        <Icon name="search" size={20} color="#FFFFFF" />
        <Text style={styles.actionText}>Search Chat</Text>
      </TouchableOpacity>
    </View>
  );

  const renderChatList = () => (
    <View style={styles.chatListContainer}>
      <View style={styles.divider} />
      <Text style={styles.chatListTitle}>Chats</Text>
      <ScrollView
        style={styles.chatList}
        showsVerticalScrollIndicator={false}
        testID={`${testID}-chat-list`}
      >
        {chatItems.map((item, index) => (
          <View key={item.id || index}>
            <TouchableOpacity
              onPress={item.onPress}
              style={styles.chatItem}
              testID={`${testID}-chat-item-${index}`}
            >
              <Text style={styles.chatItemText} numberOfLines={1}>
                {item.title}
              </Text>
              <TouchableOpacity
                onPress={item.onMenuPress}
                style={styles.chatItemMenu}
                testID={`${testID}-chat-item-menu-${index}`}
              >
                <Text style={styles.menuDots}>⋮</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }, style]} testID={testID}>
      <StatusBar barStyle="light-content" backgroundColor={backgroundColor} />
      {renderHeader()}
      {renderActionButtons()}
      {renderChatList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 12,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logoImage: {
    height: 32,
    width: 200,
  },
  logoTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 1,
    fontFamily: 'serif',
  },
  closeButton: {
    padding: 8,
    position: 'absolute',
    right: 8,
    top: 8,
  },
  actionsContainer: {
    paddingHorizontal: 16,
    paddingTop: 24,
    gap: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
  },
  actionIcon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionIconText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  actionText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  chatListContainer: {
    flex: 1,
    marginTop: 24,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  chatListTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  chatList: {
    flex: 1,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.05)',
  },
  chatItemText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '400',
    flex: 1,
    marginRight: 12,
  },
  chatItemMenu: {
    padding: 8,
  },
  menuDots: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
});
