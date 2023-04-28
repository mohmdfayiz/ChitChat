import { useEffect, useState } from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { signinSchema } from "../validation/signinValidation";
import toast from "react-hot-toast";
import axios from "../services/axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Signin = () => {
  const isAuth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate("/chat");
  }, [isAuth]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await signinSchema.validate({ email, password });
      const { data, status } = await axios.post("/api/auth/signin", {
        email,
        password,
      });
      if (status === 200) {
        toast.success("Login Success");
        localStorage.setItem("token", data.accessToken);
        navigate("/chat");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const props = {
    heading: "Sign in",
    subHeading: "Sing in to access you account.",
    linkQuestion: "Don't have an account yet?",
    link: "/signup",
    linkText: "Sing up",
  };

  return (
    <Wrapper {...props}>
      <form onSubmit={handleSubmit}>
        <InputField
          labelText="Email"
          id="email"
          type="email"
          setState={setEmail}
        />
        <InputField
          labelText="Password"
          id="password"
          type="password"
          setState={setPassword}
        />
        <button type="submit">Sign in</button>
      </form>
    </Wrapper>
  );
};

export default Signin;
