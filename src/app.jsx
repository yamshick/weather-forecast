import styles from "./app.module.css";
import {Input} from "./features/input";
export const App = () =>
    <>
        <h1>Weather forecast</h1>
        <div className={styles?.container}>
            <Input />
        </div>    </>
;
