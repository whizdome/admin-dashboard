export const fetchUserDetailsReducer = (state = {}, action) => {
  if (action.type === "FETCH_USER_DETAILS") {
    return action.payload;
  }
  return state;
};

export const updateUserDetailsReducer = (state = {}, action) => {
  if (action.type === "UPDATE_USER_DETAILS") {
    return action.payload;
  }
  return state;
};

export const deleteUserDetailsReducer = (state = {}, action) => {
  if (action.type === "DELETE_USER_DETAILS") {
    return action.payload;
  }
  return state;
};
