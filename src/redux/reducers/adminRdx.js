const initialState = {
  users: [],
  id: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ALL_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "CREATE_INDIVIDUAL_ACCOUNT":
      return {
        ...state,
        payload: action.payload,
      };
    case "CREATE_CORPORATE_ACCOUNT":
      return {
        ...state,
        payload: action.payload,
      };
    case "CREATE_ADMIN_ACCOUNT":
      return {
        ...state,
        payload: action.payload,
      };
    case "FETCH_ROLES":
      return {
        ...state,
        roles: action.payload,
      };
    case "FETCH_PLANS":
      return {
        ...state,
        plans: action.payload,
      };
    case "FETCH_USER_BY_ID":
      return {
        ...state,
        id: action.payload,
      };
    case "FETCH_USER_SOCIALS":
      return {
        ...state,
        socials: action.payload,
      };
    case "ASSIGN_ROLE":
      return {
        ...state,
        role: action.payload,
      };
    case "CREATE_SUBSCRIPTION":
      return {
        ...state,
        subscription: action.payload,
      };
    case "SHOW_USER_SOCIALS":
      return {
        ...state,
        socials: action.payload,
      };
    default:
      return state;
  }
}
