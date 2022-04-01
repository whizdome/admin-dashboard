const initialState = {
  users: [],
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
        user: action.payload,
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
    default:
      return state;
  }
}

//   if (action.type === "CREATE_INDIVIDUAL_ACCOUNT") {
//     return {
//       ...state,
//       payload: action.payload,
//     };
//   }
//   return state;
// };

// export const createCorporateAccountReducer = (state = {}, action) => {
//   if (action.type === "CREATE_CORPORATE_ACCOUNT") {
//     return {
//       ...state,
//       payload: action.payload,
//     };
//   }
//   return state;
// };

// export const createAdminAccountReducer = (state = {}, action) => {
//   if (action.type === "CREATE_ADMIN_ACCOUNT") {
//     return {
//       ...state,
//       payload: action.payload,
//     };
//   }
//   return state;
// };

// export const fetchRolesReducer = (state = {}, action) => {
//   if (action.type === "FETCH_ROLES") {
//     return action.payload;
//   }
//   return state;
// };

// export const fetchPlansReducer = (state = {}, action) => {
//   if (action.type === "FETCH_PLANS") {
//     return action.payload;
//   }
//   return state;
// };

// export const fetchUserByIdReducer = (state = {}, action) => {
//   if (action.type === "FETCH_USER_BY_ID") {
//     return action.payload;
//   }
//   return state;
// };

// export const fetchUserSocialsReducer = (state = {}, action) => {
//   if (action.type === "FETCH_USER_SOCIALS") {
//     return action.payload;
//   }
//   return state;
// };

// export const assignRoleReducer = (state = {}, action) => {
//   if (action.type === "ASSIGN_ROLE") {
//     return action.payload;
//   }
//   return state;
// };

// export const createSubscriptionReducer = (state = {}, action) => {
//   if (action.type === "CREATE_SUBSCRIPTION") {
//     return action.payload;
//   }
//   return state;
// };
