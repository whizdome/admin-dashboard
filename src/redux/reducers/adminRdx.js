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
