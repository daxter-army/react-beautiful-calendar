// REACT IMPORTS
import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

// COMPONENTS IMPORTS
import Header from "./components/Header/Header";
import Weekdays from "./components/Weekdays/Weekdays";
import Dates from "./components/Dates/Dates";
import Months from "./components/Months/Months";
import Years from "./components/Years/Years";

// CALENDAR TYPE IMPORTS
// import Default from './components/Calendars/Default/Default'
import SingleX from "./components/Calendars/SingleX/SingleX";
import SingleY from "./components/Calendars/SingleY/SingleY";

// CUSTOM HOOK
import useDate from "./hooks/useDate";

// DEFAULT DATA IMPORT
import {
  weekdaysNameArr,
  monthsNameArr,
  monthToIndex,
  generateYearsArr,
} from "./data/data";

// STYLES IMPORTS
import styles from "./Rbc.module.css";

function Rbc({ variant = "default", font = "DM Sans", onDateChange }) {
  const styles__ = {
    fontFamily: `${font}, sans-serif`,
  };

  let yearsArrLimit = 0;

  if (variant === "singleX" || variant === "singleY") {
    // to show 8 months on the grid
    yearsArrLimit = 7;
  } else {
    // to show 18 months on the grid
    yearsArrLimit = 17;
  }

  const weekdaysArr = weekdaysNameArr;
  const monthsArr = monthsNameArr;
  const [yearsArr, setYearsArr] = useState(
    generateYearsArr(
      new Date().getFullYear() - yearsArrLimit,
      new Date().getFullYear()
    )
  );
  const [noOfDatesArr, setNoOfDatesArr] = useState(null);
  const [noOfDatesPrevMonthArr, setNoOfDatesPrevMonthArr] = useState(null);
  const [noOfDatesNextMonthArr, setNoOfDatesNextMonthArr] = useState(null);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [clickedMonth, setClickedMonth] = useState(month);
  const [clickedYear, setClickedYear] = useState(year);
  const [date, setDate] = useState(new Date().getDate());
  const [currPanel, setCurrPanel] = useState("dates");

  const [startingDay, noOfDays, endingDay] = useDate(month, year);

  // DATES
  const anotherMonthDatesHandler = useCallback(
    (month__) => {
      let offset = 0;

      // for previous month
      if (month__ === "prev") {
        if (startingDay.toLowerCase() === "mon") {
          offset = 1;
        } else if (startingDay.toLowerCase() === "tue") {
          offset = 2;
        } else if (startingDay.toLowerCase() === "wed") {
          offset = 3;
        } else if (startingDay.toLowerCase() === "thu") {
          offset = 4;
        } else if (startingDay.toLowerCase() === "fri") {
          offset = 5;
        } else if (startingDay.toLowerCase() === "sat") {
          offset = 6;
        }

        let prevMonthDays = new Date(year, month, 0).getDate() - offset;
        return Array(offset)
          .fill(0)
          .map(() => ++prevMonthDays);
      }

      // for next month
      if (endingDay.toLowerCase() === "sun") {
        offset = 6;
      } else if (endingDay.toLowerCase() === "mon") {
        offset = 5;
      } else if (endingDay.toLowerCase() === "tue") {
        offset = 4;
      } else if (endingDay.toLowerCase() === "wed") {
        offset = 3;
      } else if (endingDay.toLowerCase() === "thu") {
        offset = 2;
      } else if (endingDay.toLowerCase() === "fri") {
        offset = 1;
      }

      let counter = 1;
      return Array(offset)
        .fill(0)
        .map(() => counter++);
    },
    [month, year, endingDay, startingDay]
  );

  useEffect(() => {
    // Nov is starting from Mon and having 30 days
    setNoOfDatesPrevMonthArr(anotherMonthDatesHandler("prev"));
    setNoOfDatesArr(
      Array(noOfDays)
        .fill(0)
        .map((item, index) => index + 1)
    );
    setNoOfDatesNextMonthArr(anotherMonthDatesHandler("next"));
  }, [noOfDays, month, year, anotherMonthDatesHandler]);

  const leftClickHandler = () => {
    if (month === 0) {
      setYear(year - 1);
      setMonth(11);
      return;
    }

    setMonth(month - 1);
  };

  const rightClickHandler = () => {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
      return;
    }

    // console.log(month)
    setMonth(month + 1);
  };

  const dateChangeHandler = (date) => {
    // console.log("dateChangeHandler")
    setDate(date);
    setClickedMonth(month);
    setClickedYear(year);
    // console.log(`current date: ${date}-${month + 1}-${year}`);
    onDateChange([date, month + 1, year]);
  };

  // MONTHS
  const monthLoadingHandler = () => {
    // console.log("monthLoadingHandler");
    currPanel === "dates"
      ? setCurrPanel("months")
      : currPanel === "months"
      ? setCurrPanel("dates")
      : setCurrPanel("months");
  };

  const monthChangeHandler = (month) => {
    // console.log("monthChangeHandler");
    setMonth(monthToIndex[month]);
    setCurrPanel("dates");
  };

  // YEARS
  const yearLoadingHandler = () => {
    // console.log("yearLoadingHandler");
    currPanel === "dates"
      ? setCurrPanel("years")
      : currPanel === "years"
      ? setCurrPanel("dates")
      : setCurrPanel("years");
  };

  const yearChangeHandler = (year) => {
    // console.log("yearChangeHandler")
    setYear(year);
    setCurrPanel("dates");
  };

  const shuffleYearLeftHandler = () => {
    // console.log("left");
    setYearsArr(
      generateYearsArr(yearsArr[0] - 1 - yearsArrLimit, yearsArr[0] - 1)
    );
  };

  const shuffleYearRightHandler = () => {
    // console.log("right");
    setYearsArr(
      generateYearsArr(yearsArr.at(-1) + 1, yearsArr.at(-1) + 1 + yearsArrLimit)
    );
  };

  // VARIANT SELECTION
  let calendar = "";

  if (variant === "singleX") {
    calendar = (
      <SingleX
        fontName={font}
        currScreen={currPanel}
        year={year}
        month={month}
        currDate={date}
        totalDaysArr={noOfDatesArr}
        clickedMonth={clickedMonth}
        clickedYear={clickedYear}
        dateChangeClicker={dateChangeHandler}
        // FOR MONTHS
        months={monthsArr}
        currMonth={month}
        monthChangeClicker={monthChangeHandler}
        onMonthClick={monthLoadingHandler}
        // YEARS
        years={yearsArr}
        currYear={year}
        shuffleLeftClicker={shuffleYearLeftHandler}
        shuffleRightClicker={shuffleYearRightHandler}
        yearChangeClicker={yearChangeHandler}
        onYearClick={yearLoadingHandler}
        // NEW
        onLeftClick={leftClickHandler}
        onRightClick={rightClickHandler}
      />
    );
  } else if (variant === "singleY") {
    calendar = (
      <SingleY
        fontName={font}
        currScreen={currPanel}
        year={year}
        month={month}
        currDate={date}
        totalDaysArr={noOfDatesArr}
        clickedMonth={clickedMonth}
        clickedYear={clickedYear}
        dateChangeClicker={dateChangeHandler}
        // FOR MONTHS
        months={monthsArr}
        currMonth={month}
        monthChangeClicker={monthChangeHandler}
        onMonthClick={monthLoadingHandler}
        // YEARS
        years={yearsArr}
        currYear={year}
        shuffleLeftClicker={shuffleYearLeftHandler}
        shuffleRightClicker={shuffleYearRightHandler}
        yearChangeClicker={yearChangeHandler}
        onYearClick={yearLoadingHandler}
      />
    );
  } else {
    // default calendar
    calendar = (
      <div className={styles.calendar__wrapper} style={styles__}>
        <Header
          fontName={font}
          year={year}
          month={month}
          onYearClick={yearLoadingHandler}
          onMonthClick={monthLoadingHandler}
          onLeftClick={leftClickHandler}
          onRightClick={rightClickHandler}
        />
        <Weekdays totalDays={weekdaysArr} />
        {currPanel === "dates" ? (
          <Dates
            currDate={date}
            clickedMonth={clickedMonth}
            clickedYear={clickedYear}
            currMonth={month}
            currYear={year}
            totalPrevMonthDates={noOfDatesPrevMonthArr}
            totalDates={noOfDatesArr}
            totalNextMonthDates={noOfDatesNextMonthArr}
            dateChangeClicker={dateChangeHandler}
          />
        ) : currPanel === "months" ? (
          <Months
            months={monthsArr}
            currMonth={month}
            monthChangeClicker={monthChangeHandler}
          />
        ) : (
          <Years
            years={yearsArr}
            currYear={year}
            shuffleLeftClicker={shuffleYearLeftHandler}
            shuffleRightClicker={shuffleYearRightHandler}
            yearChangeClicker={yearChangeHandler}
          />
        )}
      </div>
    );
  }

  return calendar;
}

Rbc.propTypes = {
  variant: PropTypes.oneOf(["default", "singleX", "singleY"]),
  font: PropTypes.string,
  onDateChangeHandler: PropTypes.func,
};

export default Rbc;
