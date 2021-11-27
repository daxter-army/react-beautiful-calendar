import React, { forwardRef } from 'react'

import DateItem from '../../../Dates/DateItem/DateItem'

import styles from './DateItem.module.css'

const DateViewX = (props, ref) => {
    return (
        <div ref={ref} className={styles.dateItem__wrapper}>
            {props.totalDaysArr ? props.totalDaysArr.map((date, index) => <DateItem key={index} activeMonth={true} currDate={props.currDate} clickedMonth={props.clickedMonth} clickedYear={props.clickedYear} currMonth={props.currMonth} currYear={props.currYear} onDateClick={props.dateChangeClicker}>{date}</DateItem>) : 'loading'}
        </div>
    )
}

export default forwardRef(DateViewX)
