export type UNotificationTypes = "success" | "warning" | "danger";
export enum NotificationTypes {
  success = "success",
  warning = "warning",
  danger = "danger",
}

export interface INotification {
  show: boolean;
  type: UNotificationTypes;
  messages: Array<string> | string;
  top?: boolean;
  inModal?: boolean;
}

export interface IContactNotification {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  topic: string;
  message: string;
}
