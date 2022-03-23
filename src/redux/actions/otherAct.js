import { listBanks, listCountries, listStates } from "../services/other";

export const listBanksAction = () => {
  return async (dispatch) => {
    const res = await listBanks();
    console.log("listBanksAction", res);

    dispatch({
      type: "LIST_BANKS",
      payload: res,
    });
  };
};

export const listCountriesAction = () => {
  return async (dispatch) => {
    const res = await listCountries();
    console.log("listCountriesAction", res);

    dispatch({
      type: "LIST_COUNTRIES",
      payload: res,
    });
  };
};

export const listStatesAction = () => {
  return async (dispatch) => {
    const res = await listStates();
    console.log("listStatesAction", res);

    dispatch({
      type: "LIST_STATES",
      payload: res,
    });
  };
};
