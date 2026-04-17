import type { ChatMessageType } from "./chat-message";

export type PreviousChatType = {
  id: string | number;
  title: string;
  messages: ChatMessageType[];
};
