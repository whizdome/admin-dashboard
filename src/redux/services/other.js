import { BaseApi } from "./Api";

export const listBanks = async () => {
  try {
    const res = await BaseApi.get("/banks");
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const listCountries = async () => {
  try {
    const res = await BaseApi.get("/countries");
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const listStates = async () => {
  try {
    const res = await BaseApi.get("/states");
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};
