import { BaseApi } from "./Api";

export const showUser = async () => {
  try {
    const res = await BaseApi.get("/user");
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const updateUser = async (body) => {
  try {
    const res = await BaseApi.patch("/user/update", JSON.stringify(body));
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const confirmPassword = async (body) => {
  try {
    const res = await BaseApi.post(
      "/user/confirm-password",
      JSON.stringify(body)
    );
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const changePassword = async (body) => {
  try {
    const res = await BaseApi.patch(
      "/user/change-password",
      JSON.stringify(body)
    );
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const updateUserSocials = async (body) => {
  try {
    const res = await BaseApi.patch(
      "/user/socials/update",
      JSON.stringify(body)
    );
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};
