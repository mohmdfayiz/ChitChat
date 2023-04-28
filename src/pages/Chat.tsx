import { ChatHeader } from "../components/ChatHeader";
import { MessageInput } from "../components/MessageInput";
import { Message } from "../components/Message";
import { useContext, useEffect, useRef, useState } from "react";
import { socketContext, socket } from "../context/socket";
import { messageContext } from "../context/message";
import { IMessage } from "../models/messageModel";
// import { useNavigate } from "react-router-dom";
// import { authContext } from "../context/authContext";

const Chat = () => {

  // const {authorized} = useContext(authContext)
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!authorized) navigate("/");
  // }, []);

  const [messages, setMessages] = useState<IMessage[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current &&
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <socketContext.Provider value={{ socket }}>
      <messageContext.Provider value={{ messages, setMessages }}>
        <ChatHeader />
        <Message />
        <MessageInput />
        <div ref={scrollRef} />
      </messageContext.Provider>
    </socketContext.Provider>
  );
};

export default Chat;
