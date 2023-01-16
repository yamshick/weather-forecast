import styles from "./card-date.module.css";

const monthMap = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const CardDate = ({ date }) => {
  const [year, month, day] = date.split("-");
  const monthName = monthMap[Number(month)];

  return <div className={styles.cardDate}>{`${day} ${monthName}`}</div>;
};
