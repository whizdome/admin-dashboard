export const showUserReducer = (state = {}, action) => {
  if (action.type === "SHOW_USER") {
    return action.payload;
  }
  return state;
};

export const updateUserReducer = (state = {}, action) => {
  if (action.type === "UPDATE_USER") {
    return action.payload;
  }
  return state;
};

export const confirmPasswordReducer = (state = {}, action) => {
  if (action.type === "CONFIRM_PASSWORD") {
    return action.payload;
  }
  return state;
};

export const changePasswordReducer = (state = {}, action) => {
  if (action.type === "CHANGE_PASSWORD") {
    return action.payload;
  }
  return state;
};

export const showUserSocialsReducer = (state = {}, action) => {
  if (action.type === "SHOW_USER_SOCIALS") {
    return action.payload;
  }
  return state;
};

export const updateUserSocialsReducer = (state = {}, action) => {
  if (action.type === "UPDATE_USER_SOCIALS") {
    return action.payload;
  }
  return state;
};
