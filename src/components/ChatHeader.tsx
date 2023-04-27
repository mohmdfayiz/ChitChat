import styles from './chatHeader.module.css'
import { useNavigate } from 'react-router-dom'

export const ChatHeader = () => {

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className={styles.header}>
        <h2>ChitChat👻</h2>
        <button onClick={logout}>Logout</button>
    </div>
  )
}
