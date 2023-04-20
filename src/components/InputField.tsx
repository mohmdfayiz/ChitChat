import React from "react";
import styles from './inputField.module.css'

interface Props {
  id: string;
  type: string;
  labelText: string;
  placeholder?:string;
  setState: (val:string) => void
}

export const InputField: React.FC<Props> = ({ id, type, labelText, placeholder,setState }) => {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>{labelText}</label>
      <input placeholder={placeholder} type={type} id={id} onChange={(e)=> setState(e.target.value)} />
    </div>
  );
};
