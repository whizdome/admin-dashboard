import axios from "axios";

export const AuthApi = axios.create({
  baseURL: process.env.REACT_APP_IDENTITY_BASE_URL + "/auth/",

  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_ACCESS_TOKEN,
    "Access-Control-Allow-Origin": "*",
  },
});

const access_token = localStorage.getItem("token");

const headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + access_token,
  "Access-Control-Allow-Origin": "*",
};

export const AdminApi = axios.create({
  baseURL: process.env.REACT_APP_IDENTITY_BASE_URL + "/admin/",

  headers: headers,
});

export const AccountApi = axios.create({
  baseURL: process.env.REACT_APP_IDENTITY_BASE_URL + "/user/",

  headers: headers,
});

export const UserApi = axios.create({
  baseURL: process.env.REACT_APP_IDENTITY_BASE_URL + "/user/",

  headers: headers,
});

export const OtherApi = axios.create({
  baseURL: process.env.REACT_APP_IDENTITY_BASE_URL,
  headers,
});
