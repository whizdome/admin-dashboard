const initialState = {
  data: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADMIN_LOGIN":
      return {
        ...state,
        data: action.payload,
      };
    case "ADMIN_RESET_PASSWORD":
      return {
        ...state,
        data: action.payload,
      };
    case "ADMIN_FORGOT_PASSWORD":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
