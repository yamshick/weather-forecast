import styles from "./app.module.css";
import {InputContainer} from "./features/input";
import { WeatherCardsContainer } from "./features/weather-cards-container";
import {Header} from "./components/header";

export const App = () => (
    <div className={styles?.container}>
    <Header/>
      <InputContainer />
    <WeatherCardsContainer />
    </div>
);
