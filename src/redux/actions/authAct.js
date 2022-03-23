import { login, reset_password, forgot_password } from "../services/auth";

export const AdminLogin = (payload) => {
  return async (dispatch) => {
    const res = await login(payload);
    console.log("admin login", res);

    dispatch({
      type: "ADMIN_LOGIN",
      payload: res,
    });
  };
};

export const AdminResetPassword = (payload) => {
  return async (dispatch) => {
    console.log("admin reset password");
    const res = await reset_password(payload);

    dispatch({
      type: "ADMIN_RESET_PASSWORD",
      payload: res,
    });
  };
};

export const AdminForgotPassword = (payload) => {
  return async (dispatch) => {
    console.log("admin forgot password");
    const res = await forgot_password(payload);

    dispatch({
      type: "ADMIN_FORGOT_PASSWORD",
      payload: res,
    });
  };
};
