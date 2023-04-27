import { createContext } from "react";
import { IMessage } from "../models/messageModel";

let messages: IMessage[] = [];
let setMessages: React.Dispatch<React.SetStateAction<IMessage[]>> = () => {};

export const messageContext = createContext({
  messages,
  setMessages,
});
