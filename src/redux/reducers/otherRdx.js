export const listBanksReducer = (state = [], action) => {
  if (action.type === "LIST_BANKS") {
    return action.payload;
  }
  return state;
};

export const listCountriesReducer = (state = [], action) => {
  if (action.type === "LIST_COUNTRIES") {
    return action.payload;
  }
  return state;
};

export const listStatesReducer = (state = [], action) => {
  if (action.type === "LIST_STATES") {
    return action.payload;
  }
  return state;
};
