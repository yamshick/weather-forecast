import styles from "./app.module.css";
import { InputContainer } from "./components/input";
import { WeatherCardsContainer } from "./components/weather-cards-container";
import { Header } from "./components/header";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

export const App = () => {
  const [place, setPlace] = useState(null);
  const { isLoading, forecast, error } = useFetch(place);
  const onSelect = (place) => {
    setPlace(
      place && {
        latitude: place?.lat,
        longitude: place?.long,
      }
    );
  };

  return (
    <div className={styles?.container}>
      <Header />
      <InputContainer onSelect={onSelect} />
      {place && (
        <WeatherCardsContainer
          forecast={forecast}
          isLoading={isLoading}
          error={error}
        />
      )}
    </div>
  );
};
//
