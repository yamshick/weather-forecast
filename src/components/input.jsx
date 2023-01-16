import { dictCities } from "../dictionaries/cities";
import styles from "./input.module.css";
import { useEffect, useState } from "react";
import { eventKeyCodes } from "../constants";
import { Dropdown } from "./dropdown";

const Input = ({ onSelect }) => {
  const [value, setValue] = useState("");
  const [cities, setCities] = useState([]);
  // TODO
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [activeCityIndex, setActiveCityIndex] = useState(-1);
  const [afterOnEnterSelect, setAfterOnEnterSelect] = useState(false);
  const onInput = (event) => {
    const pred = event.target.value;
    setValue(pred);
  };

  const resetDropdown = () => {
    setCities([]);
    setActiveCityIndex(-1);
  };

  // TODO
  const onMouseOver = () => {
    setIsMouseOver(true);
  };

  useEffect(() => {
    if (!value) {
      resetDropdown();
      onSelect(null);
      return;
    }

    if (afterOnEnterSelect) {
      resetDropdown();
      setAfterOnEnterSelect(false);
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
    // }
    // if (event.keyCode === eventKeyCodes.ARROW_UP) {
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
        const selectedCity = cities[activeCityIndex];
        setValue(selectedCity.name);
        setAfterOnEnterSelect(true);
        onSelect(selectedCity);
      }
      resetDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const onDropdownClick = (selectedCity) => {
    setValue(selectedCity.name);
    onSelect(selectedCity);
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
        onSelect={onDropdownClick}
        activeCityIndex={activeCityIndex}
      />
    </div>
  );
};

export const InputContainer = ({ onSelect }) => (
  <div className={styles.inputContainer}>
    <Input onSelect={onSelect} />
  </div>
);
