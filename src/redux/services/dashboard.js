import { DashboardApi } from "./Api";

export const DashboardAnalytics = async () => {
  try {
    const res = await DashboardApi.get("/dashboard");
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const HostAnalytics = async () => {
  try {
    const res = await DashboardApi.get("/hosts");
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const AttendeesAnalytics = async () => {
  try {
    const res = await DashboardApi.get("/attendees");
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const EventsAnalytics = async () => {
  try {
    const res = await DashboardApi.get("/events");
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const TopEventsAnalytics = async () => {
  try {
    const res = await DashboardApi.get("/top-events");
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const TopAttendeesLocation = async () => {
  try {
    const res = await DashboardApi.get("/top-attendees-location");
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};

export const EventAnalyticsByEventId = async (eventId) => {
  try {
    const res = await DashboardApi.get(`/event-analytics/${eventId}`);
    return res.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
  }
};
