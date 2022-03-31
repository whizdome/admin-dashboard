import {
  fetchAllUsers,
  createIndividualAccount,
  createCorporateAccount,
  createAdminAccount,
  fetchRoles,
  fetchPlans,
  fetchUserById,
  fetchUserSocials,
  assignRole,
  createSubscription,
} from "../services/admin";

export const fetchAllUsersAction = () => {
  return async (dispatch) => {
    const res = await fetchAllUsers();
    console.log("fetchAllUsersAction", res);

    dispatch({
      type: "FETCH_ALL_USERS",
      payload: res,
    });
  };
};

export const createIndividualAccountAction = (body) => {
  return async (dispatch) => {
    console.log("createIndividualAccountAction", body);
    const res = await createIndividualAccount(body);

    dispatch({
      type: "CREATE_INDIVIDUAL_ACCOUNT",
      payload: res,
    });
  };
};

export const createCorporateAccountAction = (body) => {
  return async (dispatch) => {
    console.log("createCorporateAccountAction", body);
    const res = await createCorporateAccount(body);

    dispatch({
      type: "CREATE_CORPORATE_ACCOUNT",
      payload: res,
    });
  };
};

export const createAdminAccountAction = (body) => {
  return async (dispatch) => {
    console.log("createAdminAccountAction", body);
    const res = await createAdminAccount(body);

    dispatch({
      type: "CREATE_ADMIN_ACCOUNT",
      payload: res,
    });
  };
};

export const fetchRolesAction = () => {
  return async (dispatch) => {
    const res = await fetchRoles();

    dispatch({
      type: "FETCH_ROLES",
      payload: res,
    });
  };
};

export const fetchPlansAction = (plan_type) => {
  return async (dispatch) => {
    const res = await fetchPlans(plan_type);

    dispatch({
      type: "FETCH_PLANS",
      payload: res,
    });
  };
};

export const fetchUserByIdAction = (id) => {
  return async (dispatch) => {
    const res = await fetchUserById(id);

    dispatch({
      type: "FETCH_USER_BY_ID",
      payload: res,
    });
  };
};

export const fetchUserSocialsAction = (id) => {
  return async (dispatch) => {
    const res = await fetchUserSocials(id);

    dispatch({
      type: "FETCH_USER_SOCIALS",
      payload: res,
    });
  };
};

export const assignRoleAction = (body) => {
  return async (dispatch) => {
    const res = await assignRole(body);

    dispatch({
      type: "ASSIGN_ROLE",
      payload: res,
    });
  };
};

export const createSubscriptionAction = (body) => {
  return async (dispatch) => {
    const res = await createSubscription(body);

    dispatch({
      type: "CREATE_SUBSCRIPTION",
      payload: res,
    });
  };
};
