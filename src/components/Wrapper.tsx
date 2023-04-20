import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";
import { Link } from "react-router-dom";
import styles from "./wrapper.module.css";

interface Props {
  heading: string;
  subHeading: string;
  linkQuestion: string;
  link: string;
  linkText:string;
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}

export const Wrapper = (props: Props) => {
  return (
    <div className={styles.wrapperBox}>
      <div className={styles.heading}>
        <h1>{props.heading}</h1>
        <p>{props.subHeading}</p>
      </div>
      {props.children}
      <p>
        {props.linkQuestion} <Link to={props.link}>{props.linkText}</Link>
      </p>
    </div>
  );
};
