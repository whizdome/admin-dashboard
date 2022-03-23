import {
  showUser,
  updateUser,
  confirmPassword,
  changePassword,
  showUserSocials,
  updateUserSocials,
} from "../services/user";

export const showUserAction = () => {
  return async (dispatch) => {
    const res = await showUser();
    console.log("showUserAction", res);

    dispatch({
      type: "SHOW_USER",
      payload: res,
    });
  };
};

export const updateUserAction = (body) => {
  return async (dispatch) => {
    const res = await updateUser(body);
    console.log("updateUserAction", res);

    dispatch({
      type: "UPDATE_USER",
      payload: res,
    });
  };
};

export const confirmPasswordAction = (body) => {
  return async (dispatch) => {
    console.log("confirmPasswordAction", body);
    const res = await confirmPassword(body);

    dispatch({
      type: "CONFIRM_PASSWORD",
      payload: res,
    });
  };
};

export const changePasswordAction = (body) => {
  return async (dispatch) => {
    console.log("changePasswordAction", body);
    const res = await changePassword(body);

    dispatch({
      type: "CHANGE_PASSWORD",
      payload: res,
    });
  };
};

export const showUserSocialsAction = () => {
  return async (dispatch) => {
    const res = await showUserSocials();
    console.log("showUserSocialsAction", res);

    dispatch({
      type: "SHOW_USER_SOCIALS",
      payload: res,
    });
  };
};

export const updateUserSocialsAction = (body) => {
  return async (dispatch) => {
    console.log("updateUserSocialsAction", body);
    const res = await updateUserSocials(body);

    dispatch({
      type: "UPDATE_USER_SOCIALS",
      payload: res,
    });
  };
};
