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
  return {
    "Content-Type": "application/json",
    Authorization: "Bearer " + access_token,
  };
};

export let AdminApi = axios.create({
  baseURL: process.env.REACT_APP_IDENTITY_BASE_URL + "/admin/",

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

export let DashboardApi = axios.create({
  baseURL: process.env.REACT_APP_EVENT_BASE_URL + "/admin/",

  headers: headers(),
});
