import axios from "../services/axios";

export const refreshToken = async () => {
  const { data, status } = await axios.post(
    "/api/auth/refreshToken",
    {},
    { withCredentials: true }
  );

  if (status === 200) {
    return Promise.resolve({ error: false, token: data.accessToken });
  } else return Promise.resolve({ error: true, token: null });
};

export const logout = async () => {
  const { status } = await axios.delete("/api/auth/refreshToken", {
    withCredentials: true,
  });

  return Promise.resolve({ status });
};
