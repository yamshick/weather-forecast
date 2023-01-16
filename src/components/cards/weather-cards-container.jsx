import { WeatherCard } from "./weather-card";
import styles from "./weather-cards-container.module.css";
import { Spinner } from "../spinner/spinner";

export const WeatherCardsContainer = ({ forecast, isLoading, error }) => {
  if (error) return <div className={styles.errorContainer}>Error</div>;

  if (isLoading) {
    return (
      <div className={styles.container}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={styles.cardsContainer}>
      {forecast &&
        forecast.map(
          ({
            date,
            maxT,
            minT,
            precipitationSum,
            rainSum,
            snowfallSum,
            windSpeedMax,
          }) => (
            <WeatherCard
              key={date}
              date={date}
              maxT={maxT}
              minT={minT}
              precipitationSum={precipitationSum}
              rainSum={rainSum}
              snowfallSum={snowfallSum}
              windSpeedMax={windSpeedMax}
            />
          )
        )}
    </div>
  );
};
