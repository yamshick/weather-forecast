import Cloudy from "assets/icons/cloudy.svg";
import Sunny from "assets/icons/day.svg";
import Rainy from "assets/icons/rainy-1.svg";
import Snowy from "assets/icons/snowy-1.svg";
import Thunder from "assets/icons/thunder.svg";
import styles from "./weather-card.module.css";

const weatherTypeMap = {
  cloudy: <Cloudy />,
  sunny: <Sunny />,
  rainy: <Rainy />,
  snowy: <Snowy />,
  thunder: <Thunder />,
};

export const WeatherCard = ({ type }) => {
  return (
    <div className={styles.card}>
      {weatherTypeMap[type] || null}
      <div>15 C</div>
    </div>
  );
};
