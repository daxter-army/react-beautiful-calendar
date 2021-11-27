import React, { useState, useEffect, useRef, useCallback } from 'react'

import HeaderX from './HeaderX/HeaderX'
import DateViewX from './DateViewX/DateViewX'
import MonthsX from './MonthsX/MonthsX'
import YearsX from './YearsX/YearsX'

// IMPORT STYLES
import styles from './SingleX.module.css'

const SingleX = (props) => {
    const [ scrollTimeoutX, setScrollTimeoutX ] = useState()

    const dateViewRefX = useRef()

    const styles__ = {
        fontFamily: `${props.fontName}, sans-serif`
    }

    const adjustScrollX = useCallback(() => {
        const baseDate = 4

        if(props.currDate >= baseDate) {
            // console.log('date >= 4')
            dateViewRefX.current.scrollLeft = (props.currDate - baseDate)*37.14
        }
        else {
            // console.log('date < 4')
            dateViewRefX.current.scrollLeft = 0
        }
    }, [props.currDate])

    useEffect(() => {
        setScrollTimeoutX(setTimeout(adjustScrollX, 50))
        return clearTimeout(scrollTimeoutX)
    }, [props.currDate, adjustScrollX])

    return (
        <div className={styles.singleX__wrapper} style={styles__}>
            <HeaderX           
                fontName={props.fontName}
                year={props.year}
                month={props.month}
                onYearClick={props.onYearClick}
                onMonthClick={props.onMonthClick}
                onLeftClick={props.onLeftClick}
                onRightClick={props.onRightClick}
            />
            <div className={`${props.currScreen !== 'dates' ? styles.body__height__yearAndMonthView : styles.body__height__dateView}`}>
                {
                    props.currScreen === 'dates'
                    ? <DateViewX ref={dateViewRefX} currDate={props.currDate} currMonth={props.month} currYear={props.year} totalDaysArr={props.totalDaysArr} clickedMonth={props.clickedMonth} clickedYear={props.clickedYear} dateChangeClicker={props.dateChangeClicker}/>
                        : props.currScreen === 'months'
                        ? <MonthsX months={props.months} activeMonth={props.currMonth} monthChangeClicker={props.monthChangeClicker} />
                        : <YearsX years={props.years} currYear={props.currYear} onLeftClick={props.shuffleLeftClicker} onRightClick={props.shuffleRightClicker} yearChangeClicker={props.yearChangeClicker} />
                }
            </div>
        </div>
    )
}

export default SingleX
