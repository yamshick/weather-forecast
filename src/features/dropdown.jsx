import styles from "./dropdown.module.css";
export const Dropdown = ({ items, onSelect, activeCityIndex, onKeyDown }) => {
  return (
    <div className={styles.dropdownContainer}>
      {items?.length
        ? items.map((item, index) => (
            <div
              key={item?.name || index}
              className={
                index === activeCityIndex
                  ? [styles.activeDropdownItem, styles.dropdownItem].join(" ")
                  : styles.dropdownItem
              }
              onClick={(event) => onSelect(item)}
              onKeyDown={console.log}
            >
              {item?.name}
            </div>
          ))
        : null}
    </div>
  );
};
