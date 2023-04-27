// import { useState } from "react";
import axios from "../services/axios";

const useRefreshToken = async() => {
   const {data, status} = await axios.post("/refreshToken", {}, { withCredentials: true });

   if(status === 200 ) return {error:false, token: data.accessToken}
   return { error: true }
};
