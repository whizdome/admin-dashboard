import React, { useState } from "react";
import { connect } from "react-redux";

import { RiLockPasswordLine } from "react-icons/ri";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { VscKey } from "react-icons/vsc";

import { useFormValidation } from "../../../hooks/useFormValidation";
import { AdminLogin } from "../../../redux/actions/authAct";
import Spinner from "../../../components/Loader";

import InputField from "../../../components/InputField/Input";
import Button from "../../../components/Button/Button";
import PublicLayout from "../../../components/Layout/Public/PublicLayout";
import Header from "../../../components/Header/Header";

import "./Login.scss";

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

const Login = ({ AdminLogin, loginRes }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async () => {
    const { email } = state;
    const body = {
      email: email.value,
    };
    setLoading(true);
    try {
      AdminLogin(body);
      console.log(loginRes, body);
      setData(loginRes);
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
  const { email, password } = state;

  return (
    <PublicLayout link="/forgot-password">
      <section className="login_container">
        <Header
          headerIcon={<RiLockPasswordLine />}
          headerTitle="Sign In"
          headerSubtitle="Login to APEMS Administrative Panel"
        />
        <hr />
        <form onSubmit={handleSubmit} className="form" noValidate>
          <div className="form_group">
            <InputField
              type="email"
              value={email.value}
              name="email"
              id="email"
              label="Enter Address"
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
          <div className="form_group">
            <InputField
              type="password"
              value={password}
              name="password"
              id="password"
              label="Enter Password"
              onChange={handleChange}
              leftIcon={<VscKey />}
              visibleRightIcon={<AiOutlineEyeInvisible />}
              hiddenRightIcon={<AiOutlineEye />}
            />
          </div>
          <div className="footer">
            <Button icon="true" btnTitle="Sign In" onClick={handleSubmit} />
          </div>
          <Spinner visible={loading} />
        </form>
      </section>
    </PublicLayout>
  );
};

const mapPropsToState = (state) => {
  return {
    loginRes: state.loginRes,
  };
};

export default connect(mapPropsToState, {
  AdminLogin,
})(Login);
