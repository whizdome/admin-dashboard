export const login = (state = {}, action) => {
  if (action.type === "ADMIN_LOGIN") {
    return action.payload;
  }

  return state;
};

export const resetPassword = (state = {}, action) => {
  if (action.type === "ADMIN_RESET_PASSWORD") {
    return action.payload;
  }
  return state;
};

export const forgotPassword = (state = {}, action) => {
  if (action.type === "ADMIN_FORGOT_PASSWORD") {
    return action.payload;
  }
  return state;
};
