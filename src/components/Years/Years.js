// REACT IMPORTS
import React from "react";
// import ChevronLeft from '../../assets/chevron-left-years.png'
// import ChevronRight from '../../assets/chevron-right-years.png'

// STYLES IMPORTS
import styles from "./Years.module.css";

const Years = (props) => {
  const ChevronLeft =
    "https://raw.githubusercontent.com/daxter-army/react-beautiful-calendar/main/src/assets/chevron-left-years.png";
  const ChevronRight =
    "https://raw.githubusercontent.com/daxter-army/react-beautiful-calendar/main/src/assets/chevron-right-years.png";

  return (
    <div className={styles.calendar__years}>
      <div
        className={styles.calendar__years__shuffleBtn}
        onClick={props.shuffleLeftClicker}
      >
        <button className={styles.calendar__years__button}>
          <img
            src={ChevronLeft}
            alt="chevron-logo-button"
            className={styles.shuffle__button_logo}
          />
        </button>
      </div>
      {props.years.map((year, index) => {
        return (
          <div
            key={index}
            className={styles.calendar__years__item}
            onClick={() => props.yearChangeClicker(year)}
          >
            <span
              className={`${styles.calendar__year__span} ${
                props.currYear === year ? styles.calendar__current__year : null
              }`}
            >
              {year}
            </span>
          </div>
        );
      })}
      <div
        className={styles.calendar__years__shuffleBtn}
        onClick={props.shuffleRightClicker}
      >
        <button className={styles.calendar__years__button}>
          <img
            src={ChevronRight}
            alt="chevron-logo-button"
            className={styles.shuffle__button_logo}
          />
        </button>
      </div>
    </div>
  );
};

export default Years;
