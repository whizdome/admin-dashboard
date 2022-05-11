import { BaseApi } from "./Api";

export const fetchAllUsers = async (account_type, page) => {
  try {
    const res = await BaseApi.get(
      `/admin/users?account_type=${account_type}&page=${page}`
    );
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const createIndividualAccount = async (body) => {
  try {
    const res = await BaseApi.post(
      "/admin/users/individual",
      JSON.stringify(body)
    );
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const createCorporateAccount = async (body) => {
  try {
    const res = await BaseApi.post(
      "/admin/users/corporate",
      JSON.stringify(body)
    );
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const createAdminAccount = async (body) => {
  try {
    const res = await BaseApi.post("/admin/users/admin", JSON.stringify(body));
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const fetchRoles = async () => {
  try {
    const res = await BaseApi.get("/admin/roles");
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const fetchPlans = async (plan_type) => {
  try {
    const res = await BaseApi.get(`/admin/plans?plan_type=${plan_type}`);
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const showUserSocials = async (user_id) => {
  try {
    const res = await BaseApi.get(`/admin/users/socials/${user_id}`);
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const fetchUserAccountById = async (id) => {
  try {
    const res = await BaseApi.get(`/admin/users/accounts/${id}`);
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const fetchUserSocials = async (id) => {
  try {
    const res = await BaseApi.get(`/admin/users/socials/${id}`);
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const assignRole = async (body) => {
  try {
    const res = await BaseApi.post("/admin/assign-role", JSON.stringify(body));
    return res;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const createSubscription = async (body) => {
  try {
    const res = await BaseApi.post(
      "/admin/subscriptions",
      JSON.stringify(body)
    );
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};
