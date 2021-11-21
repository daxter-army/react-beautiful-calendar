// DEFAULT DATA IMPORT
import { indexToMonth } from '../../data/data'

// STYLES IMPORTS
import styles from './Months.module.css'

const Months = (props) => {
    console.log(props.currMonth)

    return (
        <div className={styles.calendar__months}>
            {
                props.months.map((month, index) => {
                    return <div key={index} className={styles.calendar__months__item}><span className={`${styles.calendar__month__span} ${indexToMonth[props.currMonth] === month ? styles.calendar__current__month : null}`} onClick={() => props.monthChangeClicker(month)} >{month}</span></div>
                })
            }
        </div>
    )
}

export default Months
