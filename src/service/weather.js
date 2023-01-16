import { WEATHER_SERVICE_API } from "../api";

const QUERY = '?latitude=52.52&longitude=13.41&hourly=temperature_2m'
export const WeatherService =  {
    get: async (params) => {
      let query = "?";
      Object.keys(params).forEach((key) => {
        query += `${key}=${params[key]}&`;
      });
      query = query.substring(0, query.length - 1);
        const data = await fetch(`${WEATHER_SERVICE_API}${QUERY}`);
        return data.json();
        // return await fetch(`${WEATHER_SERVICE_API}${query}`);
    },
};
