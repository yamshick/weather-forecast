import { dictCities } from "../dictionaries/cities";
import styles from "./input.module.css";
import { useEffect, useState } from "react";
import { eventKeyCodes } from "../constants";
import { Dropdown } from "./dropdown";

export const Input = ({}) => {
  const [value, setValue] = useState("");
  const [cities, setCities] = useState([]);
  const [activeCityName, setActiveCityName] = useState();
  const [activeCityIndex, setActiveCityIndex] = useState(-1);
  const onInput = (event) => {
    const pred = event.target.value;
    console.log(pred);
    setValue(pred);
  };

  const resetDropdown = () => {
    setCities([]);
    setActiveCityIndex(-1);
  };

  useEffect(() => {
    if (!value) {
      resetDropdown();
      return;
    }

    setCities(
      dictCities.filter(
        (item) =>
          item?.name.toLowerCase().substring(0, value.length) ===
          value.toLowerCase()
      )
    );
  }, [value]);

  const onKeyDown = (event) => {
    console.log(event, cities);
    if (!cities.length) return;

    // if (event.keyCode === eventKeyCodes.ARROW_DOWN) {
    //   setActiveCityIndex(0);
    // }
    //
    // if (event.keyCode === eventKeyCodes.ARROW_UP) {
    //   setActiveCityIndex(cities.length - 1);
    // }

    // TODO
    if (event.key === "ArrowDown") {
      setActiveCityIndex((activeCityIndex + 1) % cities.length);
    }

    // TODO
    if (event.key === "ArrowUp") {
      setActiveCityIndex(
        activeCityIndex === 0 ? cities.length - 1 : activeCityIndex - 1
      );
    }

    if (event.keyCode === eventKeyCodes.ENTER) {
      resetDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const onSelect = (item) => {
    console.log(item);
    setValue(item?.name);
    resetDropdown();
  };

  return (
    <div onKeyDown={onKeyDown} className={styles.inputContainer}>
      <input
        type={"text"}
        className={styles.inputElement}
        onInput={onInput}
        // onKeyDown={onKeyDown}
        value={value}
      />
      <Dropdown
        items={cities}
        onSelect={onSelect}
        activeCityIndex={activeCityIndex}
        // onKeyDown={onDropdownKeyDown}
      />
    </div>
  );
};
