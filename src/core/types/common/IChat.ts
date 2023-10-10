import { QuickReplies, User } from "react-native-gifted-chat/lib/Models";

export interface IMessage {
  _id: string | number;
  text: string;
  createdAt: Date | number;
  user: User;
  image?: string;
  video?: string;
  audio?: string;
  system?: boolean;
  sent?: boolean;
  received?: boolean;
  pending?: boolean;
  quickReplies?: QuickReplies;
}

export type TChatSettings = {
  ChatModel: string;
  ChatMaxTokens?: string;
  ChatInitialPrompt: string;
  ChatTemperature?: string;
  delay1: string;
  delay2: string;
  delay3: string;
  delay4: string;
  delayText1: string;
  delayText2: string;
  delayText3: string;
  waitingDelay: string;
};

export interface GPTMessage {
  message: string;
  sentTime?: string;
  sender: "ChatGPT" | "user" | "assistant";
  direction?: string;
}

export interface ISettingChat {
  name: string;
  value: string;
}

export interface IUpdateSettingChat {
  settingName: string;
  value: string;
  memberId?: number | string;
}

export interface IAnimation {
  url: string;
  type: string;
  order: number;
}

export interface IAnimationObject {
  congratulating: IAnimation[];
  followup: IAnimation[];
  listening: IAnimation[];
  prompting: IAnimation[];
  talking: IAnimation[];
  thinking: IAnimation[];
  waiting: IAnimation[];
  init: IAnimation[];
}

export type TSendCallback =
  | ((messages: Partial<IMessage> | Partial<IMessage>[], shouldResetInputToolbar: boolean) => void)
  | null;

export type TSettingChat = { name: string; value: string };

export enum ESenderChat {
  ChatGPT = "ChatGPT",
  Client = "Client",
}
