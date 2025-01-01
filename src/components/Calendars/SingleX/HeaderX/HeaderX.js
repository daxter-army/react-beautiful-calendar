import React from "react";

import Month from "../../../Header/Month/Month";
import Year from "../../../Header/Year/Year";

import styles from "./HeaderX.module.css";

const HeaderX = (props) => {
  const ChevronLeft =
    "https://raw.githubusercontent.com/daxter-army/react-beautiful-calendar/main/src/assets/chevron-left-header.png";
  const ChevronRight =
    "https://raw.githubusercontent.com/daxter-army/react-beautiful-calendar/main/src/assets/chevron-right-header.png";

  return (
    <div className={styles.headerX__wrapper}>
      <button
        className={styles.HeaderX__shuffle__btn}
        onClick={props.onLeftClick}
      >
        <img
          className={styles.shuffle__btn__img}
          src={ChevronLeft}
          alt="shuffle-btn-img"
        />
      </button>
      <div className={styles.headerX__month__year}>
        <Month monthClicker={props.onMonthClick} fontName={props.fontName}>
          {props.month}
        </Month>
        <Year yearClicker={props.onYearClick} fontName={props.fontName}>
          {props.year}
        </Year>
      </div>
      <button
        className={styles.HeaderX__shuffle__btn}
        onClick={props.onRightClick}
      >
        <img
          className={styles.shuffle__btn__img}
          src={ChevronRight}
          alt="shuffle-btn-img"
        />
      </button>
    </div>
  );
};

export default HeaderX;
