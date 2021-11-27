import React from 'react'

import DateItem from '../../../Dates/DateItem/DateItem'

const DateView = (props) => {
    return props.totalDaysArr ? props.totalDaysArr.map((date, index) => <DateItem key={index} activeMonth={true} currDate={props.currDate} clickedMonth={props.clickedMonth} clickedYear={props.clickedYear} currMonth={props.currMonth} currYear={props.currYear} onDateClick={props.dateChangeClicker}>{date}</DateItem>) : 'loading'
}

export default DateView