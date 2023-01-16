import { WeatherService } from "../service/weather";
import { useEffect, useState } from "react";

export const useFetch = (params) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    WeatherService.get(params)
      .then((res) => {
        console.log("useFetch", { res });
        setData(res.body);
      })
      .catch((e) => {
        console.log(e)
        setError(e)
      })
      .finally(() => setIsLoading(false));
    setIsLoading(false);
  }, [params]);

  return { isLoading, data, error };
};
