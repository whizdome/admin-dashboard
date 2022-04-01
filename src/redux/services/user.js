import { UserApi } from "./Api";

export const showUser = async () => {
  try {
    const res = UserApi.get("");
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const updateUser = async (body) => {
  try {
    const res = UserApi.patch("update", JSON.stringify(body));
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const confirmPassword = async (body) => {
  try {
    const res = UserApi.post("confirm-password", JSON.stringify(body));
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const changePassword = async (body) => {
  try {
    const res = UserApi.patch("change-password", JSON.stringify(body));
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const updateUserSocials = async (body) => {
  try {
    const res = UserApi.patch("socials/update", JSON.stringify(body));
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};
