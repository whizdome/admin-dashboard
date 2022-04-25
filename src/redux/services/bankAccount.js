import { BaseApi } from "./Api";

export const fetchUserDetails = async () => {
  const res = await BaseApi.get("account");

  return res;
};

export const updateUserDetails = async (body) => {
  const res = await BaseApi.patch("account/update", JSON.stringify(body));

  return res;
};

export const deleteUserDetails = async (body) => {
  const res = await BaseApi.delete("account/delete", JSON.stringify(body));

  return res;
};
