import React from "react";

import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

import PublicLayout from "../../components/Layout/PublicLayout/PublicLayout";
import OnboardingComponent from "../../components/Onboarding/Onboarding";

const ForgotPassword = () => {
  return (
    <PublicLayout password="true">
      <section>
        <OnboardingComponent
          headerIcon={<RiLockPasswordLine />}
          headerTitle="Forgot Password"
          headerSubtitle="A verification reset password link will be sent to your email address"
          inputs={[
            {
              label: "Enter Your Email Address",
              leftIcon: <AiOutlineMail />,
              id: "email",
              name: "email",
              type: "email",
              value: "",
            },
          ]}
          btnTitle="Reset Password"
          modal={true}
          modalData={{
            icon: <RiLockPasswordLine />,
            title: "Check Your Mail",
            content:
              "A Password resent Link has been sent to your mail for verification, Kindly check your email Lanre********@gmail.com",
            btnText: "Okay, Thank you",
          }}
        />
      </section>
    </PublicLayout>
  );
};

export default ForgotPassword;
