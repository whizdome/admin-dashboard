import React, {useState} from "react";

import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineMail, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { VscKey } from "react-icons/vsc";
// import { GrView } from "react-icons/gr";

import PublicLayout from "../../components/Layout/PublicLayout/PublicLayout";
import OnboardingComponent from "../../components/Onboarding/Onboarding";

const Login = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PublicLayout link="/forgot-password">
      <section>
      <OnboardingComponent
          headerIcon={<RiLockPasswordLine />}
          headerTitle="Sign In"
          headerSubtitle="Login to APEMS Administrative Panel"
          inputs={[
            {
              label: "Email Address",
              leftIcon: <AiOutlineMail />,
              id: "email",
              name: "email",
              type: "email",
              value: { email },
              onchange: handleChange,
            },
            {
              label: "Enter Password",
              leftIcon: <VscKey />,
              rightIcon: showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />,
              id: "password",
              name: "password",
              type: showPassword ? "text" : "password",
              value: { password },
              onchange: handleChange,
            },
          ]}
          icon="true"
          btnTitle="Sign In"
          showPassword={handleShowPassword}
          btnLink="/forgot-password"
        />
      </section>
    </PublicLayout>
  );
};

export default Login;
