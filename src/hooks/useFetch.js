import { WeatherService } from "../service/weather";
import { useEffect, useState } from "react";
import { weatherMapper } from "../service/dto-mapper";

const defaultParams = {
  daily:
    "temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,snowfall_sum,windspeed_10m_max",
  timezone: "Europe%2FMoscow",
  windspeed_unit: "ms",
};
export const useFetch = (params) => {
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params?.longitude && params?.latitude) {
      setIsLoading(true);

      WeatherService.get({ ...defaultParams, ...params })
        .then((res) => {
          setForecast(weatherMapper(res));
        })
        .catch((e) => {
          setError(e);
        })
        .finally(() => setIsLoading(false));
    } else {
      setForecast(null);
    }
  }, [params]);
  return { isLoading, forecast, error };
};
