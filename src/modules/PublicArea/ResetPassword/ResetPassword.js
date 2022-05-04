import React, { useState } from "react";

import Password from "../../../assets/images/reset-password.png";
import { RiCheckLine } from "react-icons/ri";
import { VscKey } from "react-icons/vsc";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import { toast } from "react-toastify";
import { resetPassword } from "../../../redux/services/auth";
import Spinner from "../../../components/Loader";

import PublicLayout from "../../../components/Layout/Public/PublicLayout";
import Header from "../../../components/Header/Header";
import InputField from "../../../components/InputField/Input";
import { PublicButton } from "../../../components/Button/Button";
import CustomModal from "../../../components/Modal/Modal";

import "./ResetPassword.scss";

const ResetPassword = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(true);

  let format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const body = {
    password: password,
    confirmPassword: confirmPassword,
  };

  const handleSubmit = async () => {
    setLoading(true);
    const res = await resetPassword(body);
    console.log(res);
    if (res?.success === true) {
      setShowModal(true);
      setLoading(false);
    }

    if (res?.success === false) {
      toast.error(res.error, {
        position: "top-right",
      });
      setLoading(false);
    }
    setLoading(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value === password) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <PublicLayout reset="false" password="false">
      <section className="login_container reset_password">
        <Header
          headerIcon={<img src={Password} alt="forgot password" />}
          headerTitle="Set New Password"
          headerSubtitle="Please enter your details below to reset your password with a new Password"
        />
        <hr />
        <form className="form" noValidate>
          <div className="form_group">
            <InputField
              value={password}
              name="password"
              id="password"
              type="password"
              leftIcon={<VscKey />}
              label="New Password"
              onChange={handlePasswordChange}
              visibleRightIcon={<AiOutlineEyeInvisible />}
              hiddenRightIcon={<AiOutlineEye />}
            />
          </div>
          <div className="form_group">
            <InputField
              value={confirmPassword}
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              leftIcon={<VscKey />}
              label="Confirm Password"
              onChange={handleConfirmPasswordChange}
              visibleRightIcon={<AiOutlineEyeInvisible />}
              hiddenRightIcon={<AiOutlineEye />}
            />
            {confirmPassword === "" ? (
              ""
            ) : error ? (
              <span className="error">Passwords do not match</span>
            ) : (
              <span style={{ color: "green" }} className="error">
                Passwords Match ✔
              </span>
            )}
          </div>
          <div className="footer">
            <PublicButton
              btntitle="Reset Password"
              type="outline"
              onClick={handleSubmit}
              disabled={error}
            />
          </div>
          <Spinner loading={loading} />
        </form>
        <CustomModal
          visible={showModal}
          style={{
            width: "50%",
            top: "100px",
          }}
          closeModal={() => setShowModal(false)}
          children={
            <div>
              <div className="modal_icon">
                <RiCheckLine />
              </div>
              <h1>Password Reset Successful</h1>
              <p>
                Your Password has been successfully reset, kindly click the
                button below to login with your new password
              </p>
              <PublicButton
                btntitle="Sign me in"
                type="fill"
                onClick={() => setShowModal(false)}
              />
            </div>
          }
        />
        <div className="password_reset_conditions">
          <div className="ds_arrow"></div>
          <p>Password must include:</p>
          <div className="conditions">
            <ul>
              <li style={{ color: password.length >= 8 && "#3ea200" }}>
                8 characters minimum
              </li>
              <li
                style={{
                  color: /[A-Z]/.test(password) && "#3ea200",
                }}
              >
                At least 1 uppercase character
              </li>
              <li
                style={{
                  color: /[a-z]/.test(password) && "#3ea200",
                }}
              >
                At least 1 lowercase character
              </li>
              <li
                style={{
                  color: /\d/.test(password) && "#3ea200",
                }}
              >
                At least 1 number
              </li>
            </ul>
            <ul>
              <li
                style={{
                  color: format.test(password) && "#3ea200",
                }}
              >
                At least 1 special character
              </li>
              <li
                style={{
                  color: !/\s/.test(password) && "#3ea200",
                }}
              >
                No spacing
              </li>
              <li
                style={{
                  color: format.test(password) && "#3ea200",
                }}
              >
                No first name, last name or email
              </li>
              <li
                style={{
                  color: format.test(password) && "#3ea200",
                }}
              >
                No common password
              </li>
            </ul>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default ResetPassword;
