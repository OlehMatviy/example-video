import { ESenderChat } from "@app/core/types/common/IChat";

const isChatGPT = (role?: string): boolean => {
  if (!role) return !!role;
  return role === ESenderChat.ChatGPT;
};

const isClient = (role?: string): boolean => {
  if (!role) return !!role;
  return role === ESenderChat.Client;
};

export { isChatGPT, isClient };
