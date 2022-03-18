import React, { useState } from "react";
import { connect } from "react-redux";

import { RiLockPasswordLine, RiCheckLine } from "react-icons/ri";
import { VscKey } from "react-icons/vsc";

import { useFormValidation } from "../../../hooks/useFormValidation";
import { AdminResetPassword } from "../../../redux/actions/authAct";
// import Spinner from "../../../components/Loader";

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
      regEx: isStrongPassword,
      error: "Please provide a strong password",
    },
  },
};

const ResetPassword = ({ AdminResetPassword, resetPasswordRes }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSend = async () => {
    const { password, confirmPassword } = state;
    const body = {
      password: password.value,
      confirmPassword: confirmPassword.value,
    };
    setLoading(true);
    try {
      AdminResetPassword(body);
      console.log(resetPasswordRes, body);
      setData(resetPasswordRes);
      setShowModal(true);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const { state, disable, handleChange, handleSubmit } = useFormValidation(
    stateSchema,
    validateSchema,
    handleSend
  );
  const { password, confirmPassword } = state;

  return (
    <PublicLayout reset="false" password="false">
      <section className="login_container reset_password">
        <Header
          headerIcon={<RiLockPasswordLine />}
          headerTitle="Set New Password"
          headerSubtitle="A verification reset password link will be sent to your email address"
        />
        <hr />
        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="form_group">
            <InputField
              value={password.value}
              name="password"
              id="password"
              type="password"
              leftIcon={<VscKey />}
              label="New Password"
              onChange={handleChange}
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
            />
            {confirmPassword.error ? (
              <span className="error">{confirmPassword.error}</span>
            ) : confirmPassword.value ? (
              <span style={{ color: "green" }} className="error">
                Strong Password ✔
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="footer">
            <PublicButton
              btnTitle="Reset Password"
              type="outline"
              onClick={handleSubmit}
            />
          </div>
        </form>
        <CustomModal
          visible={showModal}
          closeModal={() => setShowModal(false)}
          children={
            <div>
              <div className="modal_icon">
                <RiCheckLine />
              </div>
              <h1>Password Reset Successful</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam"
              </p>
              <PublicButton
                btnTitle="Sign me in"
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

const mapPropsToState = (state) => {
  return {
    resetPasswordRes: state.resetPasswordRes,
  };
};

export default connect(mapPropsToState, {
  AdminResetPassword,
})(ResetPassword);
