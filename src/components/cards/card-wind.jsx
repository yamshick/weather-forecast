import styles from "./card-wind.module.css";

export const CardWind = ({ windSpeed }) => {
  return <div className={styles.cardWind}>{`${windSpeed} m/s`}</div>;
};
