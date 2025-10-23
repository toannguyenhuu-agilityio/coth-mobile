export interface NotificationData {
  [key: string]: any;
}

export interface NotificationContent {
  title: string | null;
  subtitle?: string | null;
  body: string | null;
  data: NotificationData;
  badge?: number | null;
  sound?: string | boolean | null;
}

export interface NotificationRequest {
  identifier: string;
  content: NotificationContent;
  trigger: any;
}

export interface AppNotification {
  date: number;
  request: NotificationRequest;
}

export interface NotificationResponse {
  notification: AppNotification;
  actionIdentifier: string;
}

export interface PushNotificationState {
  expoPushToken?: string;
  notification?: AppNotification;
  error?: Error;
}
