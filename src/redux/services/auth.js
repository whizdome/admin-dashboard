import { AuthApi } from "./Api";

export const login = (body) => {
  const res = AuthApi.post("Login/", JSON.stringify(body));

  return res;
};

export const reset_password = async (body) => {
  const res = AuthApi.post("reset-password", JSON.stringify(body));

  return res;
};

export const forgot_password = async (body) => {
  const res = AuthApi.post("forgot-password", JSON.stringify(body));

  return res;
};
