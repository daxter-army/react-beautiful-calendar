// REACT IMPORTS
import { useState, useEffect } from "react";
import PropTypes from 'prop-types'

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
  yearsArrLimit,
  generateYearsArr,
} from "./data/data";

// STYLES IMPORTS
import styles from "./react-beautiful-calendar.module.css";

function Rbc({ variant = 'default', font = 'DM Sans', onDateChangeHandler}) {
  const styles__ = {
    fontFamily: `${font}, sans-serif`
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

  useEffect(() => {
    // Nov is starting from Mon and having 30 days
    setNoOfDatesPrevMonthArr(prevMonthDatesHandler());
    setNoOfDatesArr(
      Array(noOfDays)
        .fill(0)
        .map((item, index) => index + 1)
    );
    setNoOfDatesNextMonthArr(nextMonthDatesHandler());
  }, [month, year]);

  // DATES
  const prevMonthDatesHandler = () => {
    let offset = 0;

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
  };

  const nextMonthDatesHandler = () => {
    let offset = 0;

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
  };

  const leftClickHandler = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
      return;
    }

    setMonth(month - 1);
  };

  const rightClickHandler = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
      return;
    }

    setMonth(month + 1);
  };

  const dateChangeHandler = (date) => {
    // console.log(date)
    setDate(date);
    setClickedMonth(month);
    setClickedYear(year);
    console.log(`current date: ${date}-${month + 1}-${year}`);
    onDateChangeHandler([date, month + 1, year])
  };

  // MONTHS
  const monthLoadingHandler = () => {
    // console.log("month changer");
    currPanel === "dates"
      ? setCurrPanel("months")
      : currPanel === "months"
      ? setCurrPanel("dates")
      : setCurrPanel("months");
  };

  const monthChangeHandler = (month) => {
    // console.log(month);
    setMonth(monthToIndex[month]);
    setCurrPanel("dates");
  };

  // YEARS
  const yearLoadingHandler = () => {
    // console.log("year changer");
    currPanel === "dates"
      ? setCurrPanel("years")
      : currPanel === "years"
      ? setCurrPanel("dates")
      : setCurrPanel("years");
  };

  const yearChangeHandler = (year) => {
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
    calendar = <SingleX />
  } else if (variant === "singleY") {
    calendar = <SingleY />
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
        <Weekdays
          totalDays={weekdaysArr}
        />
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
  variant: PropTypes.oneOf(['default', 'singleX', 'singleY']),
  font: PropTypes.string,
  onDateChangeHandler: PropTypes.func
}

export default Rbc;