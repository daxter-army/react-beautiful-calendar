// REACT IMPORTS
import React, { useState, useEffect, useRef, useCallback } from 'react'

import Month from '../../Header/Month/Month'
import Year from '../../Header/Year/Year'
import MonthsY from './MonthsY/MonthsY'
import YearsY from './YearsY/YearsY'

import DateView from './DateView/DateView'

// STYLES IMPORTS
import styles from './SingleY.module.css'

const SingleX = ({fontName = 'DM Sans' , year, years, shuffleLeftClicker, shuffleRightClicker, month, months, currMonth, onMonthClick, onYearClick, totalDaysArr, currScreen, currYear, yearChangeClicker, monthChangeClicker, currDate, clickedMonth, clickedYear, dateChangeClicker }) => {
    const [ scrollTimeout, setScrollTimeout ] = useState()
    const dateViewRef = useRef(null)
    const style__ = {
        fontFamily : `${fontName}, sans-serif`
    }

    const buttonsStyles = {
        color: '#5e16b6',
        bgColor: '#e4d2f9'
    }

    const adjustScroll = useCallback(() => {
        const baseDate = 4

        if(currDate >= baseDate) {
            // console.log('date < 4')
            dateViewRef.current.scrollTop = (currDate - baseDate)*37.14
        }
        else {
            // console.log('date >= 4')
            dateViewRef.current.scrollTop = 0
        }
    }, [currDate])

    useEffect(() => {
        setScrollTimeout(setTimeout(adjustScroll, 50))
        return clearTimeout(scrollTimeout)
    }, [currDate, adjustScroll])

    return (
        <div className={styles.calendar__singleX__wrapper} style={style__}>
            <div className={`${styles.calendar__toggle__btn} ${styles.toggle__btn__up}`}>
                <Month variant="singleY" size={15} color={buttonsStyles.color} bgColor={buttonsStyles.bgColor} monthClicker={onMonthClick} fontName={fontName}>{month}</Month>
            </div>
            <div ref={dateViewRef} className={styles.calendar__dates}>
                {
                    currScreen === 'dates'
                    ? <DateView currDate={currDate} currMonth={month} currYear={year} totalDaysArr={totalDaysArr} clickedMonth={clickedMonth} clickedYear={clickedYear} dateChangeClicker={dateChangeClicker} />
                    : currScreen === 'months'
                        ? <MonthsY months={months} activeMonth={currMonth} monthChangeClicker={monthChangeClicker} />
                        : <YearsY years={years} currYear={currYear} onLeftClick={shuffleLeftClicker} onRightClick={shuffleRightClicker} yearChangeClicker={yearChangeClicker} />
                }
            </div>
            <div className={`${styles.calendar__toggle__btn} ${styles.toggle__btn__down}`}>
                <Year size={15} color={buttonsStyles.color} bgColor={buttonsStyles.bgColor} yearClicker={onYearClick} fontName={fontName}>{year}</Year>
            </div>
        </div>
    )
}

export default SingleX
