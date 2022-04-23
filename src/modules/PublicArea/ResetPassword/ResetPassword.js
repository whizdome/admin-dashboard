import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RiLockPasswordLine, RiCheckLine } from "react-icons/ri";
import { VscKey } from "react-icons/vsc";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import { toast } from "react-toastify";
import { useFormValidation } from "../../../hooks/useFormValidation";
import { resetPassword } from "../../../redux/services/auth";
import Spinner from "../../../components/Loader";

import PublicLayout from "../../../components/Layout/Public/PublicLayout";
import Header from "../../../components/Header/Header";
import InputField from "../../../components/InputField/Input";
import { PublicButton } from "../../../components/Button/Button";
import CustomModal from "../../../components/Modal/Modal";

import "./ResetPassword.scss";

export const isStrongPassword = RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

const stateSchema = {
  password: {
    value: "",
    error: "",
  },
  confirmPassword: {
    value: "",
    error: "",
  },
};

const validateSchema = {
  password: {
    required: true,
    validator: {
      regEx: isStrongPassword,
      error: "Please provide a strong password",
    },
  },
  confirmPassword: {
    required: true,
    validator: {
      match: isStrongPassword,
      error: "Passwords do not match",
    },
  },
};

const ResetPassword = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const resetState = useSelector((state) => state.resetPasswordRes);

  const { state, disable, handleChange } = useFormValidation(
    stateSchema,
    validateSchema
    // handleSend
  );
  const { password, confirmPassword } = state;
  const body = {
    password: password.value,
    confirmPassword: confirmPassword.value,
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

  return (
    <PublicLayout reset="false" password="false">
      <section className="login_container reset_password">
        <Header
          headerIcon={<RiLockPasswordLine />}
          headerTitle="Set New Password"
          headerSubtitle="Please enter your details below to reset your password with a new Password"
        />
        <hr />
        <form className="form" noValidate>
          <div className="form_group">
            <InputField
              value={password.value}
              name="password"
              id="password"
              type="password"
              leftIcon={<VscKey />}
              label="New Password"
              onChange={handleChange}
              visibleRightIcon={<AiOutlineEyeInvisible />}
              hiddenRightIcon={<AiOutlineEye />}
            />
            {password.error ? (
              <span className="error">{password.error}</span>
            ) : password.value ? (
              <span style={{ color: "green" }} className="error">
                Strong Password ✔
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="form_group">
            <InputField
              value={confirmPassword.value}
              name="confirmPassword"
              id="confirmPassword"
              type="password"
              leftIcon={<VscKey />}
              label="Confirm Password"
              onChange={handleChange}
              visibleRightIcon={<AiOutlineEyeInvisible />}
              hiddenRightIcon={<AiOutlineEye />}
            />
            {confirmPassword.error ? (
              <span className="error">{confirmPassword.error}</span>
            ) : confirmPassword.value ? (
              <span style={{ color: "green" }} className="error">
                Password Match✔
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="footer">
            <PublicButton
              btntitle="Reset Password"
              type="outline"
              onClick={handleSubmit}
              disabled={disable}
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
