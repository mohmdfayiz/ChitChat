import { JwtPayload } from "jwt-decode";

export interface MyJwtPayload extends JwtPayload {
  userId: string;
  userName: string;
  email: string;
}
