// REACT IMPORTS
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// STYLES IMPORTS
import styles from './Years.module.css'

const Years = (props) => {
    return (
        <div className={styles.calendar__years}>
            <div className={styles.calendar__years__shuffleBtn} onClick={props.shuffleLeftClicker}>
                <button className={styles.calendar__years__button}><FaChevronLeft /></button>
            </div>
            {
                props.years.map((year, index) => {
                    return <div key={index} className={styles.calendar__years__item} onClick={() => props.yearChangeClicker(year)}><span className={`${styles.calendar__year__span} ${props.currYear === year ? styles.calendar__current__year : null}`}>{year}</span></div>
                })
            }
            <div className={styles.calendar__years__shuffleBtn} onClick={props.shuffleRightClicker}>
                <button className={styles.calendar__years__button}><FaChevronRight /></button>
            </div>
        </div>
    )
}

export default Years
