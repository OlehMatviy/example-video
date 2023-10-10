import { IBaseBtnProps } from "./common/IBaseBtnProps";
import { IBaseModalProps, TModal } from "./common/IBaseModalProps";
import {
  GPTMessage,
  ISettingChat,
  IUpdateSettingChat,
  TChatSettings,
  TSendCallback,
  TSettingChat,
} from "./common/IChat";
import { IDropdownProp, IVocabulary } from "./common/IDropdownProp";
import { IAuthenticate } from "./general/IAuthenticate";
import {
  IBaseNavigationProps,
  IScreenProps,
  ScreenNavigationProp,
} from "./general/IBaseNavigationProps";
import { IBaseNotifications } from "./general/IBaseNotification";
import {
  BaseRootScreen,
  TabParamList,
  IAuthScreens,
  IMainTabs,
  RootStackParamList,
  BaseTabScreen,
  MenuNav,
} from "./general/INavigation";

import { IContactNotification, INotification, NotificationTypes } from "./general/INotification";
import { IServerResponse } from "./general/IServer";
import { IUser } from "./general/IUser";

export type {
  TabParamList,
  RootStackParamList,
  BaseRootScreen,
  BaseTabScreen,
  IMainTabs,
  IAuthScreens,
  IUser,
  IBaseNotifications,
  IScreenProps,
  IBaseNavigationProps,
  ScreenNavigationProp,
  IBaseBtnProps,
  NotificationTypes,
  INotification,
  IContactNotification,
  IAuthenticate,
  TChatSettings,
  GPTMessage,
  IUpdateSettingChat,
  IBaseModalProps,
  IDropdownProp,
  MenuNav,
  ISettingChat,
  TSendCallback,
  TSettingChat,
  IVocabulary,
  IServerResponse,
  TModal,
};

export * from "./apps";
export * from "./common";
