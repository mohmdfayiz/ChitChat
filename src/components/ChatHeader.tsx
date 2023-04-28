import styles from "./chatHeader.module.css";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/refreshToken";

export const ChatHeader = () => {
  const navigate = useNavigate();
  const Logout = () => {
    logout();
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className={styles.header}>
      <h2>ChitChat👻</h2>
      <button onClick={Logout}>Logout</button>
    </div>
  );
};
