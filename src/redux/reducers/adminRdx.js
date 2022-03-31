export const fetchAllUsersReducer = (state = {}, action) => {
  if (action.type === "FETCH_ALL_USERS") {
    return action.payload;
  }
  return state;
};

export const createIndividualAccountReducer = (state = {}, action) => {
  if (action.type === "CREATE_INDIVIDUAL_ACCOUNT") {
    return action.payload;
  }
  return state;
};

export const createCorporateAccountReducer = (state = {}, action) => {
  if (action.type === "CREATE_CORPORATE_ACCOUNT") {
    return action.payload;
  }
  return state;
};

export const createAdminAccountReducer = (state = {}, action) => {
  if (action.type === "CREATE_ADMIN_ACCOUNT") {
    return action.payload;
  }
  return state;
};

export const fetchRolesReducer = (state = {}, action) => {
  if (action.type === "FETCH_ROLES") {
    return action.payload;
  }
  return state;
};

export const fetchPlansReducer = (state = {}, action) => {
  if (action.type === "FETCH_PLANS") {
    return action.payload;
  }
  return state;
};

export const fetchUserByIdReducer = (state = {}, action) => {
  if (action.type === "FETCH_USER_BY_ID") {
    return action.payload;
  }
  return state;
};

export const fetchUserSocialsReducer = (state = {}, action) => {
  if (action.type === "FETCH_USER_SOCIALS") {
    return action.payload;
  }
  return state;
};

export const assignRoleReducer = (state = {}, action) => {
  if (action.type === "ASSIGN_ROLE") {
    return action.payload;
  }
  return state;
};

export const createSubscriptionReducer = (state = {}, action) => {
  if (action.type === "CREATE_SUBSCRIPTION") {
    return action.payload;
  }
  return state;
};
