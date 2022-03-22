import { combineReducers } from "redux";
import { login, resetPassword, forgotPassword } from "./authRdx";
import {
  showUserReducer,
  updateUserReducer,
  confirmPasswordReducer,
  changePasswordReducer,
  showUserSocialsReducer,
  updateUserSocialsReducer,
} from "./userRdx";
import {
  listBanksReducer,
  listCountriesReducer,
  listStatesReducer,
} from "./otherRdx";
import {
  fetchUserDetailsReducer,
  updateUserDetailsReducer,
  deleteUserDetailsReducer,
} from "./bankAccountRdx";
import {
  fetchAllUsersReducer,
  createIndividualAccountReducer,
  createCorporateAccountReducer,
  createAdminAccountReducer,
} from "./adminRdx";

export default combineReducers({
  loginRes: login,
  resetPasswordRes: resetPassword,
  forgotPasswordRes: forgotPassword,

  showUserRes: showUserReducer,
  updateUserRes: updateUserReducer,
  confirmPasswordRes: confirmPasswordReducer,
  changePasswordRes: changePasswordReducer,
  showUserSocialsRes: showUserSocialsReducer,
  updateUserSocialsRes: updateUserSocialsReducer,

  listBanksRes: listBanksReducer,
  listCountriesRes: listCountriesReducer,
  listStatesRes: listStatesReducer,

  fetchUserDetailsRes: fetchUserDetailsReducer,
  updateUserDetailsRes: updateUserDetailsReducer,
  deleteUserDetailsRes: deleteUserDetailsReducer,

  fetchAllUsersRes: fetchAllUsersReducer,
  createIndividualAccountRes: createIndividualAccountReducer,
  createCorporateAccountRes: createCorporateAccountReducer,
  createAdminAccountRes: createAdminAccountReducer,
});
