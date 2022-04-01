export const showUserAction = () => {
  return {
    type: "SHOW_USER",
  };
};

export const updateUserAction = (body) => {
  return {
    type: "UPDATE_USER",
    payload: body,
  };
};

export const confirmPasswordAction = (body) => {
  return {
    type: "CONFIRM_PASSWORD",
    payload: body,
  };
};

export const changePasswordAction = (body) => {
  return {
    type: "CHANGE_PASSWORD",
    payload: body,
  };
};

export const showUserSocialsAction = () => {
  return {
    type: "SHOW_USER_SOCIALS",
  };
};

export const updateUserSocialsAction = (body) => {
  return {
    type: "UPDATE_USER_SOCIALS",
    payload: body,
  };
};
