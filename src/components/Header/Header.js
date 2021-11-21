// REACT IMPORTS
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// COMPONENT IMPORTS
import Month from './Month/Month'
import Year from './Year/Year'

// STYLES IMPORTS
import styles from './Header.module.css'

const CalendarHeader = (props) => {
    return (
        <div className={styles.calendar__header}>
            <button className={`${styles.calender__header__item} ${styles.calender__header__navbtn}`} onClick={props.onLeftClick}><FaChevronLeft color='#5E16B6'/></button>
            <div className={styles.calender__header__item} id={styles.calender__header__banner}>
                <Month monthClicker={props.onMonthClick} fontName={props.fontName}>{props.month}</Month><Year yearClicker={props.onYearClick} fontName={props.fontName}>{props.year}</Year>
            </div>
            <button className={`${styles.calender__header__item} ${styles.calender__header__navbtn}`} onClick={props.onRightClick}><FaChevronRight color='#5E16B6'/></button>
        </div>
    )
}

export default CalendarHeader
