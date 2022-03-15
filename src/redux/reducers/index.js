import { combineReducers } from "redux";
import { login, resetPassword, forgotPassword } from "./authRdx";

export default combineReducers({
  loginRes: login,
  resetPasswordRes: resetPassword,
  forgotPasswordRes: forgotPassword,
});
