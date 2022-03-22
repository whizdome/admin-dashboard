import {
  fetchUserDetails,
  updateUserDetails,
  deleteUserDetails,
} from "../services/bankAccount";

export const fetchUserDetailsAction = () => {
  return async (dispatch) => {
    const res = await fetchUserDetails();
    console.log("fetchUserDetailsAction", res);

    dispatch({
      type: "FETCH_USER_DETAILS",
      payload: res,
    });
  };
};

export const updateUserDetailsAction = (body) => {
  return async (dispatch) => {
    console.log("updateUserDetailsAction", body);
    const res = await updateUserDetails(body);

    dispatch({
      type: "UPDATE_USER_DETAILS",
      payload: res,
    });
  };
};

export const deleteUserDetailsAction = (body) => {
  return async (dispatch) => {
    console.log("deleteUserDetailsAction", body);
    const res = await deleteUserDetails(body);

    dispatch({
      type: "DELETE_USER_DETAILS",
      payload: res,
    });
  };
};
