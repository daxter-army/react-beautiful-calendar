// COMPONENT IMPORTS
import DateItem from './DateItem/DateItem'

// STYLES IMPORTS
import styles from './Dates.module.css'

const Dates = (props) => {
    return (
        <div className={styles.calendar__dateview}>
            {
                props.totalPrevMonthDates
                ? props.totalPrevMonthDates.map((date, index) => {
                    return <DateItem key={index} activeMonth={false} >{date}</DateItem>
                })
                : 'loading'
            }
            {
                props.totalDates
                ? props.totalDates.map((date, index) => {
                    return <DateItem key={index} activeMonth={true} currDate={props.currDate} clickedMonth={props.clickedMonth} clickedYear={props.clickedYear} currMonth={props.currMonth} currYear={props.currYear} onDateClick={props.dateChangeClicker}>{date}</DateItem>
                    }) 
                : 'loading'
            }
            {
                props.totalNextMonthDates
                ? props.totalNextMonthDates.map((date, index) => {
                    return <DateItem key={index} activeMonth={false} >{date}</DateItem>
                })
                : 'loading'
            }
        </div>
    )
}

export default Dates