import { useContext, useEffect, useState } from "react";
import { socketContext } from "../context/socket";
import { messageContext } from "../context/message";
import styles from "./message.module.css";
import { MyJwtPayload } from "../models/TokenModel";
import jwtDecode from "jwt-decode";
import dateFormat from "dateformat";
import { IMessage } from "../models/messageModel";

export const Message = () => {

  const { socket } = useContext(socketContext);
  const { messages, setMessages } = useContext(messageContext);
  const [arrivedMessage, setArrivedMessage] = useState<IMessage>();

  const token = localStorage.getItem("token") as string;
  const decodedToken = jwtDecode(token) as MyJwtPayload;

  useEffect(() => {
    console.log('msg received in front end');
    
    socket.on("msg-received", (data: { sender: string; message: string }) => {
      setArrivedMessage({ ...data, id: Date.now(), time: Date.now() });
    });
  }, [arrivedMessage]);
 
  useEffect(() => {
    arrivedMessage && setMessages((prev) => [...prev, arrivedMessage]);
  }, [arrivedMessage]);

  return (
    <div className={styles.messageSection}>
      <div className={styles.container}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={
              msg.sender == decodedToken.userId
                ? styles.rowRight
                : styles.rowLeft
            }
          >
            <div
              className={
                msg.sender == decodedToken.userId ? styles.right : styles.left
              }
            >
              <div className={styles.message}>
                <span>{msg.message}</span>
                <div className={styles.time}>
                  <span>{dateFormat(msg.time, "shortTime")}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
