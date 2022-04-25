import axios from "axios";

export const AuthApi = axios.create({
  baseURL: process.env.REACT_APP_IDENTITY_BASE_URL + "/auth/",

  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_ACCESS_TOKEN,
    "Access-Control-Allow-Origin": "*",
  },
});

export let BaseApi = axios.create({
  baseURL: process.env.REACT_APP_IDENTITY_BASE_URL,
});

BaseApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";

  return config;
});

export let DashboardApi = axios.create({
  baseURL: process.env.REACT_APP_EVENT_BASE_URL + "/admin/",
});

DashboardApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";

  return config;
});
