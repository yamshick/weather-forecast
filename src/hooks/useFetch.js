import { WeatherService } from "../service/weather";
import { useEffect, useState } from "react";
import { weatherMapper } from "../service/dto-mapper";

const defaultParams = {
  daily:
    "temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,snowfall_sum,windspeed_10m_max",
  timezone: "Europe%2FMoscow",
};
export const useFetch = (params) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  console.log({ params });
  useEffect(() => {
    setIsLoading(true);
    if (params?.longitude && params?.latitude) {
      WeatherService.get({ ...defaultParams, ...params })
        .then((res) => {
          console.log("useFetch", { res });
          setData(weatherMapper(res));
        })
        .catch((e) => {
          console.log(e);
          setError(e);
        })
        .finally(() => setIsLoading(false));
    }
    setIsLoading(false);
  }, [params]);

  return { isLoading, data, error };
};
