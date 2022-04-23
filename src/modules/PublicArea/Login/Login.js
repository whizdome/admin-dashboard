import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { VscKey } from "react-icons/vsc";
import { toast } from "react-toastify";

import { useFormValidation } from "../../../hooks/useFormValidation";
import { login } from "../../../redux/services/auth";
import Spinner from "../../../components/Loader";

import InputField from "../../../components/InputField/Input";
import { PublicButton } from "../../../components/Button/Button";
import PublicLayout from "../../../components/Layout/Public/PublicLayout";
import Header from "../../../components/Header/Header";

import "./Login.scss";

export const isEmail = RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
export const isStrongPassword = RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

const stateSchema = {
  email: {
    value: "",
    error: "",
  },
  password: {
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

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { state, disable, handleChange } = useFormValidation(
    stateSchema,
    validateSchema
    // handleSend
  );
  const history = useHistory();

  const { email, password } = state;

  const body = {
    email: email.value,
    password: password.value,
  };

  const handleSubmit = async () => {
    setLoading(true);
    const res = await login(body);
    if (res?.data) {
      const data = res.data;
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));
      history.push("/dashboard", data);
      setLoading(false);
    }

    if (res?.errors) {
      toast.error(res.errors.email[0], {
        position: "top-right",
      });
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <PublicLayout link="/forgot-password">
      <section className="login_container">
        <Header
          headerIcon={<RiLockPasswordLine />}
          headerTitle="Sign In"
          headerSubtitle="Login to APEMS Administrative Panel"
        />
        <hr />
        <form className="form" noValidate>
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
              value={password.value}
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
            <PublicButton
              icon="true"
              btntitle="Sign In"
              onClick={handleSubmit}
              disabled={disable}
            />
          </div>
          <Spinner visible={loading} />
        </form>
      </section>
    </PublicLayout>
  );
};

export default Login;
