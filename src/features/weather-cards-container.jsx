import { WeatherCard } from "./weather-card";
import styles from "./weather-cards-container.module.css";

export const WeatherCardsContainer = ({ data, isLoading, error}) => {
  if (error) return (<div>Error</div>)
  if (isLoading) return (<div>Loading</div>)

  return (
    <div className={styles.cardsContainer}>
      {["rainy", "thunder", "cloudy", "sunny", "snowy"].map((item) => (
        <WeatherCard key={item} type={item} />
      ))}
    </div>
  );
};
