import React, { useState } from "react";
import { connect } from "react-redux";

import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";

import { useFormValidation } from "../../../hooks/useFormValidation";
import { AdminForgotPassword } from "../../../redux/actions/authAct";
import { useAxios } from "../../../hooks/useAxios";
import Spinner from "../../../components/Loader";

import PublicLayout from "../../../components/Layout/Public/PublicLayout";
import Header from "../../../components/Header/Header";
import InputField from "../../../components/InputField/Input";
import { PublicButton } from "../../../components/Button/Button";
import CustomModal from "../../../components/Modal/Modal";

export const isEmail = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);

const stateSchema = {
  email: {
    value: "",
    error: "",
  },
};

const validateSchema = {
  email: {
    required: true,
    validator: {
      regEx: isEmail,
      error: "Invalid email address",
    },
  },
};

const ForgotPassword = () => {
  const [showModal, setShowModal] = useState(false);

  const { state, disable, handleChange } = useFormValidation(
    stateSchema,
    validateSchema
    // handleSend
  );

  const { email } = state;
  const body = {
    email: email.value,
  };

  const { loading, response, error, onClick } = useAxios({
    path: AdminForgotPassword,
    params: body,
  });

  const handleSubmit = async () => {
    onClick();
    response && setShowModal(true);
    error && state({ email: { value: "" }, password: { value: "" } });
  };

  return (
    <PublicLayout password="true">
      <section className="login_container">
        <Header
          headerIcon={<RiLockPasswordLine />}
          headerTitle="Forgot Password"
          headerSubtitle="A verification reset password link will be sent to your email address"
        />
        <hr />
        <form className="form" noValidate>
          <div className="form_group">
            <InputField
              id="email"
              type="email"
              value={email.value}
              name="email"
              label="Enter Your Email Address"
              onChange={handleChange}
              leftIcon={<AiOutlineMail />}
            />
            {email.error ? (
              <span className="error">{email.error}</span>
            ) : email.value ? (
              <span style={{ color: "green" }} className="error">
                Email ✔
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
              disabled={disable}
            />
          </div>
          <Spinner visible={loading} />
        </form>
        <CustomModal
          visible={showModal}
          closeModal={() => setShowModal(false)}
          children={
            <div>
              <div className="modal_icon">
                <RiLockPasswordLine />
              </div>
              <h1>Check Your Mail</h1>
              <p>
                A Password resent Link has been sent to your mail for
                verification, Kindly check your email Lanre********@gmail.com
              </p>
              <PublicButton
                btnTitle="Okay, Thank you"
                type="fill"
                onClick={() => setShowModal(false)}
              />
            </div>
          }
        />
      </section>
    </PublicLayout>
  );
};

const mapPropsToState = (state) => {
  return {
    forgotPasswordRes: state.forgotPasswordRes,
  };
};

export default connect(mapPropsToState, {
  AdminForgotPassword,
})(ForgotPassword);
