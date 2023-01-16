import { WeatherService } from "../service/weather";
import { useEffect, useState } from "react";
import { weatherMapper } from "../service/dto-mapper";

export const useFetch = (params) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  console.log({ params });
  useEffect(() => {
    setIsLoading(true);
    WeatherService.get(params)
      .then((res) => {
        console.log("useFetch", { res });
        setData(weatherMapper(res));
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      })
      .finally(() => setIsLoading(false));
    setIsLoading(false);
  }, [params]);

  return { isLoading, data, error };
};
