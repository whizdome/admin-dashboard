import axios from "axios";

export const AuthApi = axios.create({
  baseURL: process.env.REACT_APP_IDENTITY_BASE_URL + "/auth/",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_ACCESS_TOKEN,
    "Access-Control-Allow-Origin": "*",
  },
});
