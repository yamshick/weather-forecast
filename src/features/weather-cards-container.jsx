import { WeatherCard } from "./weather-card";
import styles from "./weather-cards-container.module.css";

export const WeatherCardsContainer = () => {
  return (
    <div className={styles.cardsContainer}>
      {["rainy", "thunder", "cloudy", "sunny", "snowy"].map((item) => (
        <WeatherCard key={item} type={item} />
      ))}
    </div>
  );
};
