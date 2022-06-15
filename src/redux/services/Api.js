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
  config.headers["Access-Control-Allow-Origin"] = "*";
  config.headers["Content-Type"] = "application/json";

  return config;
});

export let AuditApi = axios.create({
  baseURL: "https://apems-audit-dev.apems.co/api/",
});


export const GetAuditLogs = async() => {
  const token = localStorage.getItem("token");
  return await axios.get("https://apems-audit-dev.apems.co/api/admin/audits", {
  headers: {
    Authorization: "Bearer " + token, //the token is a variable which holds the token
  },
  });
}

export const downloadAuditLogsApiv= async () => {
  const token = localStorage.getItem("token");
  return await axios.get(
    "https://apems-audit-dev.apems.co/api/admin/audits/download-pdf",
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};


export const downloadAuditLogsApi = async(id) => {
  const token = localStorage.getItem("token");
 
  return await axios.get(
    `https://apems-audit-dev.apems.co/api/admin/audits/download-pdf/${
      id?id:""
    }`,
    {
      responseType: "blob",
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};




export let DashboardApi = axios.create({
  baseURL: process.env.REACT_APP_EVENT_BASE_URL + "/admin/",
});

DashboardApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";

  return config;
});
