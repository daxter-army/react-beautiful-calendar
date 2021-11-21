// COMPONENT IMPORTS
import WeekdayItem from './WeekdayItem/WeekdayItem'

// STYLES IMPORTS
import styles from './Weekdays.module.css'

const Weekdays = (props) => {
    return (
        <div className={styles.calendar__weekdays}>
            {
                props.totalDays
                ? props.totalDays.map((day, index) => {
                    return <WeekdayItem key={index}>{day}</WeekdayItem>
                })
                : 'loading'
            }
        </div>
    )
}

export default Weekdays
