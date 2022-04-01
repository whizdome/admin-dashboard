import { combineReducers } from "redux";
import { login, forgotPassword, resetPassword } from "./authRdx";
import userReducer from "./userRdx";
import otherReducer from "./otherRdx";
import {
  fetchUserDetailsReducer,
  updateUserDetailsReducer,
  deleteUserDetailsReducer,
} from "./bankAccountRdx";
import adminReducer from "./adminRdx";

export default combineReducers({
  loginRes: login,
  resetPasswordRes: resetPassword,
  forgotPasswordRes: forgotPassword,

  userReducer,

  otherReducer,

  fetchUserDetailsRes: fetchUserDetailsReducer,
  updateUserDetailsRes: updateUserDetailsReducer,
  deleteUserDetailsRes: deleteUserDetailsReducer,

  adminReducer,
});
