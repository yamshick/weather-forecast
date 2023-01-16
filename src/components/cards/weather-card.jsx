import Cloudy from "assets/icons/cloudy.svg";
import Sunny from "assets/icons/day.svg";
import Rainy from "assets/icons/rainy-1.svg";
import Snowy from "assets/icons/snowy-1.svg";
import Thunder from "assets/icons/thunder.svg";
import styles from "./weather-card.module.css";

import { weatherTypeMapper } from "service/type-mapper";
import { CardDate } from "./card-date";
import { CardWind } from "./card-wind";

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
      {/*{weatherTypeMap[type] || null}*/}
      {/*<div>15 C</div>*/}
      <CardDate date={date} />
      {weatherTypeMap[type]}
      <div>max: {maxT} C</div>
      <div>min: {minT} C</div>
      {/*<div> Осадки: {precipitationSum} </div>*/}
      {/*<div> Снег: {snowfallSum} </div>*/}
      <CardWind windSpeed={windSpeedMax} />
    </div>
  );
};
