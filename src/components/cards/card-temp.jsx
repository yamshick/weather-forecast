import styles from "./card-temp.module.css";
export const CardTemp = ({ maxT, minT }) => (
  <div className={styles.cardTemp}>
    <div>max: {maxT} ℃</div>
    <div>min: {minT} ℃</div>
  </div>
);
