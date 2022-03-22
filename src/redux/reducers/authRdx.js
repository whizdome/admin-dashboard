const initialState = {
  message: "",
  data: {
    access_token: "",
    user: {
      id: "",
      name: "",
      email: "",
      user_type: "",
      email_verified_at: null,
      profile_picture_path: null,
      gender: "",
      date_of_birth: "",
      street_address: "",
      phone_number: "",
      city: "",
      postal_code: 0,
      state_id: 0,
      country_id: 0,
    },
  },
};

export const login = (state = initialState, action) => {
  if (action.type === "ADMIN_LOGIN") {
    return action.payload;
  }
  return state;
};

export const resetPassword = (state = {}, action) => {
  if (action.type === "ADMIN_RESET_PASSWORD") {
    return action.payload;
  }
  return state;
};

export const forgotPassword = (state = {}, action) => {
  if (action.type === "ADMIN_FORGOT_PASSWORD") {
    return action.payload;
  }
  return state;
};
