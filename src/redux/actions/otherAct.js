import { listBanks, listCountries, listStates } from "../services/other";

export const listBanksAction = () => {
  return {
    type: "LIST_BANKS",
  };
};

export const listCountriesAction = () => {
  return {
    type: "LIST_COUNTRIES",
  };
};

export const listStatesAction = () => {
  return {
    type: "LIST_STATES",
  };
};
