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

export const fetchRoles = () => {
  const res = AdminApi.get("roles");

  return res;
};

export const fetchPlans = (plan_type) => {
  const res = AdminApi.get(`plans?plan_type=${plan_type}`);

  return res;
};

export const fetchUserById = (id) => {
  const res = AdminApi.get(`users/account/${id}`);

  return res;
};

export const fetchUserSocials = (id) => {
  const res = AdminApi.get(`users/socials/${id}`);

  return res;
};

export const assignRole = (body) => {
  const res = AdminApi.post("assign-role", JSON.stringify(body));

  return res;
};

export const createSubscription = (body) => {
  const res = AdminApi.post("subscriptions", JSON.stringify(body));

  return res;
};
