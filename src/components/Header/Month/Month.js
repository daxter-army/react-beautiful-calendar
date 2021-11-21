// DEFAULT DATA IMPORT
import { indexToMonthFull } from '../../../data/data'

// STYLES IMPORT
import styles from './Month.module.css'

const Month = (props) => {

    const styles__ = {
        fontFamily: `${props.fontName}, sans-serif`,
    }

    return (
        <button className={styles.calendar__month__btn} onClick={props.monthClicker} style={styles__} >{indexToMonthFull[props.children]}</button>
    )
}

export default Month
