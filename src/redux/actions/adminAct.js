export const fetchAllUsersAction = (id) => {
  return {
    type: "FETCH_ALL_USERS",
    payload: id,
  };
};

export const createIndividualAccountAction = (body) => {
  return {
    type: "CREATE_INDIVIDUAL_ACCOUNT",
    payload: body,
  };
};

export const createCorporateAccountAction = (body) => {
  return {
    type: "CREATE_CORPORATE_ACCOUNT",
    payload: body,
  };
};

export const createAdminAccountAction = (body) => {
  return {
    type: "CREATE_ADMIN_ACCOUNT",
    payload: body,
  };
};

export const fetchRolesAction = () => {
  return {
    type: "FETCH_ROLES",
  };
};

export const fetchPlansAction = (plan_type) => {
  return {
    type: "FETCH_PLANS",
    payload: plan_type,
  };
};

export const fetchUserByIdAction = (id) => {
  return {
    type: "FETCH_USER_BY_ID",
    payload: id,
  };
};

export const fetchUserSocialsAction = (id) => {
  return {
    type: "FETCH_USER_SOCIALS",
    payload: id,
  };
};

export const assignRoleAction = (body) => {
  return {
    type: "ASSIGN_ROLE",
    payload: body,
  };
};

export const createSubscriptionAction = (body) => {
  return {
    type: "CREATE_SUBSCRIPTION",
    payload: body,
  };
};
