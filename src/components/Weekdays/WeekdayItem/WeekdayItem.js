// STYLES IMPORT
import styles from './WeekdayItem.module.css'

const Weekdays = (props) => {
    return (
        <div className={`${styles.calendar__weekdaybox} ${props.children.toLowerCase() === 'sat' ? styles.weekday__saturday : props.children.toLowerCase() === 'sun' ? styles.weekday__sunday : null}`}>
            <p>{props.children}</p>
        </div>
    )
}

export default Weekdays