const initialState = {
  users: [],
  socials: [],
  details: localStorage.getItem("token") || {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SHOW_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "UPDATE_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "CONFIRM_PASSWORD":
      return {
        ...state,
        payload: action.payload,
      };
    case "CHANGE_PASSWORD":
      return {
        ...state,
        payload: action.payload,
      };
    case "UPDATE_USER_SOCIALS":
      return {
        ...state,
        socials: action.payload,
      };
    case "SET_USER_DETAILS":
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
}
