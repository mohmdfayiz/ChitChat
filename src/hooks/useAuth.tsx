import { useState } from "react";
import jwtDecode, { JwtPayload } from "jwt-decode";

export const useAuth = () => {
  const [authorized, setAuthorized] = useState<boolean>(false);

    const accessToken = localStorage.getItem("token") as string;
    if(!accessToken) return authorized; // false
    const decodedToken: JwtPayload = jwtDecode(accessToken);

    if (decodedToken.exp && decodedToken.exp * 1000 > Date.now()) {
      setAuthorized(true);
    }

  return authorized; // false
};
