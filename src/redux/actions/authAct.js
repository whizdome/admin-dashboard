export const AdminLogin = (body) => {
  return {
    type: "ADMIN_LOGIN",
    payload: body,
  };
};

export const AdminResetPassword = (body) => {
  return {
    type: "ADMIN_RESET_PASSWORD",
    payload: body,
  };
};

export const AdminForgotPassword = (body) => {
  return {
    type: "ADMIN_FORGOT_PASSWORD",
    payload: body,
  };
};
