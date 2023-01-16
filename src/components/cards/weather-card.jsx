import Cloudy from "assets/icons/cloudy.svg";
import Sunny from "assets/icons/day.svg";
import Rainy from "assets/icons/rainy-1.svg";
import Snowy from "assets/icons/snowy-1.svg";
import Thunder from "assets/icons/thunder.svg";
import styles from "./weather-card.module.css";

import { weatherTypeMapper } from "service/type-mapper";
import { CardDate } from "./card-date";
import { CardWind } from "./card-wind";
import { CardTemp } from "./card-temp";

const weatherTypeMap = {
  cloudy: <Cloudy />,
  sunny: <Sunny />,
  rainy: <Rainy />,
  snowy: <Snowy />,
  thunder: <Thunder />,
};

export const WeatherCard = ({
  date,
  maxT,
  minT,
  precipitationSum,
  rainSum,
  snowfallSum,
  windSpeedMax,
}) => {
  const type = weatherTypeMapper({ rainSum, precipitationSum, snowfallSum });
  return (
    <div className={styles.card}>
      <CardDate date={date} />
      {weatherTypeMap[type]}
      <CardTemp minT={minT} maxT={maxT} />
      <CardWind windSpeed={windSpeedMax} />
    </div>
  );
};
