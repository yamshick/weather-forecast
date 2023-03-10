import { WEATHER_SERVICE_API } from "../api";

export const WeatherService = {
  get: async (params) => {
    let query = "?";
    Object.keys(params).forEach((key) => {
      query += `${key}=${params[key]}&`;
    });
    query = query.substring(0, query.length - 1);

    const data = await fetch(`${WEATHER_SERVICE_API}${query}`);
    return data.json();
  },
};
