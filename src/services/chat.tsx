import axios from "./axios";

interface Message {
  sender: string;
  message: string;
}

export const sendMessage = async (data: Message, token:string) => {
  const { status } = await axios.post(
    "/api/chat/message",
    data,
    { headers: { Authorization: `Bearer ${token}` } } 
  );
  return Promise.resolve({ status });
};

export const getMessages = async (token:string) => {
  const { data, status } = await axios.get("/api/chat/message", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return Promise.resolve({ data, status });
};
