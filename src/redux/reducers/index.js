import { combineReducers } from "redux";
import { login, resetPassword, forgotPassword } from "./authRdx";

export default combineReducers({
  login,
  resetPassword,
  forgotPassword,
});
