import styles from "./app.module.css";
import { InputContainer } from "./features/input";
import { WeatherCardsContainer } from "./features/weather-cards-container";
import { Header } from "./components/header";
import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

export const App = () => {
  const [place, setPlace] = useState(null);
  const { isLoading, data, error } = useFetch(place);
  const onSelect = (place) => {
    console.log({ place });
    setPlace(
      place && {
        latitude: place?.lat,
        longitude: place?.long,
      }
    );
  };

  console.log("App", { data });
  return (
    <div className={styles?.container}>
      <Header />
      <InputContainer onSelect={onSelect} />
      {place && (
        <WeatherCardsContainer
          data={data}
          isLoading={isLoading}
          error={error}
        />
      )}
    </div>
  );
};
