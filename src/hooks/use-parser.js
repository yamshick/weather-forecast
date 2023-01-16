import { WeatherService } from "../service/weather";
import { useEffect, useState } from "react";

export const useFetch = (data) => {
  const [forecast, setForecast] = useState([]);
  useEffect(() => {}, [data]);

  return { forecast };
};
