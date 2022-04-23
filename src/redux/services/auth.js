import { AuthApi } from "./Api";

export const login = async (body) => {
  try {
    const res = await AuthApi.post("login", JSON.stringify(body));
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const resetPassword = async (body) => {
  try {
    const res = await AuthApi.post("reset-password", JSON.stringify(body));
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const forgotPassword = async (body) => {
  try {
    const res = await AuthApi.post("forgot-password", JSON.stringify(body));
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};
