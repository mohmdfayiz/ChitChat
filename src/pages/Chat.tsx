import { ChatHeader } from "../components/ChatHeader";
import { MessageInput } from "../components/MessageInput";
import { Message } from "../components/Message";
import { useState } from "react";
import { socketContext, socket } from "../context/socket";
import { messageContext } from "../context/message";
import { IMessage } from "../models/messageModel";

const Chat = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  return (
    <socketContext.Provider value={{socket}}>
      <messageContext.Provider value={{ messages, setMessages }}>
        <ChatHeader />
         <Message />
        <MessageInput />
      </messageContext.Provider>
    </socketContext.Provider>
  );
};

export default Chat;
