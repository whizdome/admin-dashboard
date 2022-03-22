import {
  fetchAllUsers,
  createIndividualAccount,
  createCorporateAccount,
  createAdminAccount,
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
