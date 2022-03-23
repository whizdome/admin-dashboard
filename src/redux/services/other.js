import { OtherApi } from "./Api";

export const listBanks = () => {
  const res = OtherApi.get("/banks");

  return res;
};

export const listCountries = () => {
  const res = OtherApi.get("/countries");

  return res;
};

export const listStates = () => {
  const res = OtherApi.get("/states");

  return res;
};
