import React from "react";

import { RiLockPasswordLine, RiCheckLine } from "react-icons/ri";
import { VscKey } from "react-icons/vsc";

import PublicLayout from "../../components/Layout/PublicLayout/PublicLayout";
import OnboardingComponent from "../../components/Onboarding/Onboarding";

import "./index.scss";

const ResetPassword = () => {
  return (
    <PublicLayout reset="false" password="false">
      <section className="reset_password">
        <OnboardingComponent
          headerIcon={<RiLockPasswordLine />}
          headerTitle="Set New Password"
          headerSubtitle="A verification reset password link will be sent to your email address"
          inputs={[
            {
              label: "New Password",
              leftIcon: <VscKey />,
              id: "newPassword",
              name: "newPassword",
              type: "password",
              value: "",
            },
            {
              label: "Confirm Password",
              leftIcon: <VscKey />,
              id: "confirmPassword",
              name: "confirmPassword",
              type: "password",
              value: "",
            },
          ]}
          btnTitle="Reset Password"
          modal={true}
          modalData={{
            icon: <RiCheckLine />,
            title: "Password Reset Successful",
            content:
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam",
            btnText: "Sign me in",
          }}
        />
        <div className="password_reset_conditions">
          <div className="ds_arrow"></div>
          <p>Password must include:</p>
          <div className="conditions">
            <ul>
              <li>8 characters minimum</li>
              <li>At least 1 uppercase character</li>
              <li>At least 1 lowercase character</li>
              <li>At least 1 number</li>
            </ul>
            <ul>
              <li>At least 1 special character</li>
              <li>No spacing</li>
              <li>No first name, last name or email</li>
              <li>No common password</li>
            </ul>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default ResetPassword;
