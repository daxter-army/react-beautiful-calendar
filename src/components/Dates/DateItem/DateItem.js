// STYLES IMPORTS
import styles from './DateItem.module.css'

const Datebox = (props) => {
    const dateClickHandler = () => {
        props.onDateClick(props.children)
    }

    return (
        <div className={`${styles.calendar__dateItem} `} onClick={props.onDateClick ? dateClickHandler  : null}>
            <p className={`${styles.calendar__datenumber} ${!props.activeMonth ? styles.calendar__anotherMonth__dateNumber : null} ${props.currDate === props.children && props.clickedMonth === props.currMonth && props.clickedYear === props.currYear ? styles.datebox__currDate : null}`}>{props.children}</p>
        </div>
    )
}

export default Datebox