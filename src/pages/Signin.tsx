import { useState } from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { signinSchema } from "../validation/signinValidation";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const isValid = await signinSchema.validate({ email, password });
    isValid ? alert("success") : alert("failed");
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
