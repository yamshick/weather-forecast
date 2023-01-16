import styles from "./app.module.css";
import { InputContainer } from "./features/input";
import { WeatherCardsContainer } from "./features/weather-cards-container";
import { Header } from "./components/header";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

const initialFetchParams = {
  latitude: 52.52,
  longitude: 13.41,
  daily:
    "temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,snowfall_sum,windspeed_10m_max",
  timezone: "Europe%2FMoscow",
};

export const App = () => {
  const [fetchParams, setFetchParams] = useState(initialFetchParams);
  const { isLoading, data, error } = useFetch(fetchParams);
  const onSelect = (city) => {
    console.log({ city });
    setFetchParams({
      ...initialFetchParams,
      latitude: city.lat,
      longitude: city.long,
    });
  };

  return (
    <div className={styles?.container}>
      <Header />
      <InputContainer onSelect={onSelect} />
      {data && (
        <WeatherCardsContainer
          data={data}
          isLoading={isLoading}
          error={error}
        />
      )}
    </div>
  );
};
