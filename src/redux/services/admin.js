import { AdminApi } from "./Api";

export const fetchAllUsers = () => {
  const res = AdminApi.get("users");

  return res;
};

export const createIndividualAccount = (body) => {
  const res = AdminApi.post("users/individual", JSON.stringify(body));

  return res;
};

export const createCorporateAccount = (body) => {
  const res = AdminApi.post("users/corporate", JSON.stringify(body));

  return res;
};

export const createAdminAccount = (body) => {
  const res = AdminApi.post("users/admin", JSON.stringify(body));

  return res;
};
