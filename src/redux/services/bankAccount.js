import { AccountApi } from "./Api";

export const fetchUserDetails = () => {
  const res = AccountApi.get("account");

  return res;
};

export const updateUserDetails = (body) => {
  const res = AccountApi.patch("account/update", JSON.stringify(body));

  return res;
};

export const deleteUserDetails = (body) => {
  const res = AccountApi.delete("account/delete", JSON.stringify(body));

  return res;
};
