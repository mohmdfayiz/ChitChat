import { useState, useContext } from "react";
import InputEmoji from "react-input-emoji";
import styles from "./messageInput.module.css";
import {socketContext} from "../context/socket";
import { messageContext } from "../context/message";
import jwt_decode from "jwt-decode";
import { MyJwtPayload } from "../models/TokenModel";
import { toast } from "react-hot-toast";
// import { sendMessage as saveMsg } from "../services/chat";

export const MessageInput = () => {
  
  const [text, setText] = useState("");
  const { socket } = useContext(socketContext);
  const { messages, setMessages } = useContext(messageContext);

  const token = localStorage.getItem("token") as string;
  const decodedToken = jwt_decode(token) as MyJwtPayload;

  const sendMessage = () => {
    if (!text.trim().length) return toast.error("Please type a message!");
    // saveMsg({ message: text, sender: decodedToken.userId }, token);

    const newMessage = {
      id: Date.now(),
      message: text,
      sender: decodedToken.userId,
      time: Date.now(),
    };
    socket.emit("send-msg", { message: text, sender: decodedToken.userId });
    setMessages(messages.concat(newMessage));
    setText("");
  };

  return (
    <div className={styles.messageInput}>
      <span>
        <InputEmoji
          value={text}
          onChange={setText}
          onEnter={sendMessage}
          theme={"dark"}
          placeholder="Type a message"
        />
        <button className={styles.sendBtn} onClick={sendMessage}>
          🚀
        </button>
      </span>
    </div>
  );
};
