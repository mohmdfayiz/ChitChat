import { createContext } from "react";

let authorized: boolean = false;
let setAuthorized: React.Dispatch<React.SetStateAction<boolean>> = () => {};

export const authContext = createContext({
  authorized,
  setAuthorized,
});
