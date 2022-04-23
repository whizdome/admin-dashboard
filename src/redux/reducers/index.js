import { combineReducers } from "redux";
import authReducer from "./authRdx";
import userReducer from "./userRdx";
import otherReducer from "./otherRdx";
import {
  fetchUserDetailsReducer,
  updateUserDetailsReducer,
  deleteUserDetailsReducer,
} from "./bankAccountRdx";
import adminReducer from "./adminRdx";

export default combineReducers({
  authReducer,

  userReducer,

  otherReducer,

  fetchUserDetailsRes: fetchUserDetailsReducer,
  updateUserDetailsRes: updateUserDetailsReducer,
  deleteUserDetailsRes: deleteUserDetailsReducer,

  adminReducer,
});
