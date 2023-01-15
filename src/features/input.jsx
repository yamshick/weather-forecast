import { dictCities } from "../dictionaries/cities";
import styles from "./input.module.css";
import { useEffect, useState } from "react";
import { eventKeyCodes } from "../constants";
import { Dropdown } from "./dropdown";

const Input = ({}) => {
  const [value, setValue] = useState("");
  const [cities, setCities] = useState([]);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [activeCityIndex, setActiveCityIndex] = useState(-1);
  const onInput = (event) => {
    const pred = event.target.value;
    console.log(pred);
    setValue(pred);
  };

  const resetDropdown = () => {
    setCities([]);
    setActiveCityIndex(-1);
    console.log("resetDropdown", { cities, activeCityIndex });
  };

  const onMouseOver = () => {
    setIsMouseOver(true);
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
    if (!cities.length) return;
    // if (event.keyCode === eventKeyCodes.ARROW_DOWN) {
    //   setActiveCityIndex(0);
    // }
    //
    // if (event.keyCode === eventKeyCodes.ARROW_UP) {
    //   setActiveCityIndex(cities.length - 1);
    // }

    // TODO
    if (event.key === "ArrowDown" && !isMouseOver) {
      setActiveCityIndex((activeCityIndex + 1) % cities.length);
    }

    // TODO
    if (event.key === "ArrowUp" && !isMouseOver) {
      setActiveCityIndex(
        activeCityIndex === 0 ? cities.length - 1 : activeCityIndex - 1
      );
    }

    if (event.keyCode === eventKeyCodes.ENTER) {
      if (activeCityIndex >= 0) {
        setValue(cities[activeCityIndex]?.name);
      }
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
    <div onKeyDown={onKeyDown} className={styles.inputWithDropdown}>
      <input
        type={"text"}
        className={styles.inputElement}
        onInput={onInput}
        value={value}
      />
      <Dropdown
        onMouseOver={onMouseOver}
        items={cities}
        onSelect={onSelect}
        activeCityIndex={activeCityIndex}
      />
    </div>
  );
};


export const InputContainer = () => <div className={styles.inputContainer}>
  <Input/>
</div>