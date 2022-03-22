import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import {
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { VscKey } from "react-icons/vsc";

import { useFormValidation } from "../../../hooks/useFormValidation";
import { useAxios } from "../../../hooks/useAxios";
import { AdminLogin } from "../../../redux/actions/authAct";
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

  const loginState = useSelector((state) => state.loginRes);
  const dispatch = useDispatch();

  const body = useMemo(() => {
    return {
      email: email.value,
      password: password.value,
    };
  }, [email, password]);

  const handleSubmit = useCallback(async () => {
    setLoading(true);
    try {
      const result = await dispatch(AdminLogin(body));
      console.log("loginState", loginState, result);
      history.push("/dashboard");
    } catch (error) {
      console.log("err", error);
    } finally {
      setLoading(false);
    }
  }, [body, dispatch, history]);

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
            {/* {password.error ? (
              <span className="error">{password.error}</span>
            ) : password.value ? (
              <span style={{ color: "green" }} className="error">
                Password ✔
              </span>
            ) : (
              ""
            )} */}
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
