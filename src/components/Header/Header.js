// REACT IMPORTS
import React from 'react'
import ChevronLeft from 'assets/chevron-left-header.png'
import ChevronRight from 'assets/chevron-right-header.png'

// COMPONENT IMPORTS
import Month from './Month/Month'
import Year from './Year/Year'

// STYLES IMPORTS
import styles from './Header.module.css'

const CalendarHeader = (props) => {
    return (
        <div className={styles.calendar__header}>
            <button className={`${styles.calender__header__item} ${styles.calender__header__navbtn}`} onClick={props.onLeftClick}><img src={ChevronLeft} alt="chevron-left-logo" className={styles.shuffle__button__logo}/></button>
            <div className={styles.calender__header__item} id={styles.calender__header__banner}>
                <Month monthClicker={props.onMonthClick} fontName={props.fontName}>{props.month}</Month><Year yearClicker={props.onYearClick} fontName={props.fontName}>{props.year}</Year>
            </div>
            <button className={`${styles.calender__header__item} ${styles.calender__header__navbtn}`} onClick={props.onRightClick}><img src={ChevronRight} alt="chevron-right-logo" className={styles.shuffle__button__logo}/></button>
        </div>
    )
}

export default CalendarHeader
