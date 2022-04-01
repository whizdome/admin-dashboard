import { AdminApi } from "./Api";

export const fetchAllUsers = async () => {
  try {
    const res = await AdminApi.get("users");
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const createIndividualAccount = async (body) => {
  try {
    const res = AdminApi.post("users/individual", JSON.stringify(body));
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const createCorporateAccount = async (body) => {
  try {
    const res = await AdminApi.post("users/corporate", JSON.stringify(body));
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const createAdminAccount = async (body) => {
  try {
    const res = await AdminApi.post("users/admin", JSON.stringify(body));
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const fetchRoles = async () => {
  try {
    const res = await AdminApi.get("roles");
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const fetchPlans = async (plan_type) => {
  try {
    const res = await AdminApi.get(`plans?plan_type=${plan_type}`);
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const showUserSocials = async (user_id) => {
  try {
    const res = AdminApi.get(`users/socials/${user_id}`);
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const fetchUserAccountById = async (id) => {
  try {
    const res = await AdminApi.get(`users/accounts/${id}`);
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const fetchUserSocials = async (id) => {
  try {
    const res = await AdminApi.get(`users/socials/${id}`);
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const assignRole = async (body) => {
  try {
    const res = await AdminApi.post("assign-role", JSON.stringify(body));
    return res;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const createSubscription = async (body) => {
  try {
    const res = await AdminApi.post("subscriptions", JSON.stringify(body));
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};
