const initialState = {
  users: [],
  socials: [],
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
    default:
      return state;
  }
}
