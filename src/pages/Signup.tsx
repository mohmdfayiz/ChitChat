import { useState } from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { signupSchema } from "../validation/signupValidation";

const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const isValid = await signupSchema.validate({
        userName,
        email,
        password,
        confirmPassword,
      });

      isValid && alert("success");

    } catch (error : any) {
      alert(error.message);
    }
  };

  const props = {
    heading: "Sign up",
    subHeading: "Sing up to create your account.",
    linkQuestion: "Already have an account?",
    link: "/",
    linkText: "Sing in",
    handleSubmit: handleSubmit,
  };

  return (
    <Wrapper {...props}>
      <form onSubmit={handleSubmit}>
        <InputField
          labelText="User Name"
          id="username"
          type="text"
          setState={setUserName}
        />
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
        <InputField
          labelText="Confirm Password"
          id="confirmPassword"
          type="text"
          setState={setConfirmPassword}
        />
        <button type="submit">Sign up</button>
      </form>
    </Wrapper>
  );
};

export default Signup;
