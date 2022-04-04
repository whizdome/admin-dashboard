import axios from "axios";

export const AuthApi = axios.create({
  baseURL: process.env.REACT_APP_IDENTITY_BASE_URL + "/auth/",

  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_ACCESS_TOKEN,
    "Access-Control-Allow-Origin": "*",
  },
});

let headers = () => {
  const access_token = localStorage.getItem("token");
  // console.log("A2 token", access_token);
  return {
    "Content-Type": "application/json",
    Authorization: "Bearer " + access_token,
    "Access-Control-Allow-Origin": "*",
  };
};

export let AdminApi = axios.create({
  baseURL: process.env.REACT_APP_IDENTITY_BASE_URL + "/admin/",
  //headers: headers(),
  headers: headers(),
});

export let AccountApi = axios.create({
  baseURL: process.env.REACT_APP_IDENTITY_BASE_URL + "/user/",

  headers: headers(),
});

export let UserApi = axios.create({
  baseURL: process.env.REACT_APP_IDENTITY_BASE_URL + "/user/",

  headers: headers(),
});

export let OtherApi = axios.create({
  baseURL: process.env.REACT_APP_IDENTITY_BASE_URL,
  headers: headers(),
});

// const headers = () => {
//   const access_token = localStorage.getItem("token");
//   console.log("A2 token", access_token);
//   return {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + access_token,
//     "Access-Control-Allow-Origin": "*",
//   };
// };
