import { UserApi } from "./Api";

export const showUser = () => {
  const res = UserApi.get("");

  return res;
};

export const updateUser = (body) => {
  const res = UserApi.patch("update", JSON.stringify(body));

  return res;
};

export const confirmPassword = (body) => {
  const res = UserApi.post("confirm-password", JSON.stringify(body));

  return res;
};

export const changePassword = (body) => {
  const res = UserApi.patch("change-password", JSON.stringify(body));

  return res;
};

export const showUserSocials = () => {
  const res = UserApi.get("socials");

  return res;
};

export const updateUserSocials = (body) => {
  const res = UserApi.patch("socials/update", JSON.stringify(body));

  return res;
};
