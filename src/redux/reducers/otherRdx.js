const initialState = {
  banks: [],
  states: [],
  countries: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "LIST_BANKS":
      return {
        ...state,
        banks: action.payload,
      };
    case "LIST_STATES":
      return {
        ...state,
        states: action.payload,
      };
    case "LIST_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
}
