import { WeatherCard } from "./weather-card";
import styles from "./weather-cards-container.module.css";

export const WeatherCardsContainer = ({ data, isLoading, error }) => {
  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading</div>;

  console.log("WeatherCardsContainer", data);
  return (
    <div className={styles.cardsContainer}>
      {/*{["rainy", "thunder", "cloudy", "sunny", "snowy"].map((item) => (*/}
      {/*  <WeatherCard key={item} type={item} />*/}
      {/*))}*/}
      {data.map(
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
