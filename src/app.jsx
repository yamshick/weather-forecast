import styles from "./app.module.css";
import { InputContainer } from "./features/input";
import { WeatherCardsContainer } from "./features/weather-cards-container";
import { Header } from "./components/header";
import { useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";

const initialFetchParams = {
    latitude: 52.52,
    longitude: 13.41,
    hourly: "temperature_2m",
};

export const App = () => {
  const [city, setCity] = useState(null);
    const [fetchParams, setFetchParams] = useState(initialFetchParams)

  // useEffect(() => {console.log({city})},[city]);

  const { isLoading, data, error } = useFetch(fetchParams);

  // useEffect(() => {
  //   const { isLoading, data, error } = useFetch();
  //   setLoading(isLoading);
  //   setError(error);
  //   setData(data);
  // }, [city]);
  const onSelect = (city) => {setCity(city)
    setFetchParams({...initialFetchParams})
  };

  return (
    <div className={styles?.container}>
      <Header />
      <InputContainer onSelect={onSelect} />
      <WeatherCardsContainer
        data={data}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};
