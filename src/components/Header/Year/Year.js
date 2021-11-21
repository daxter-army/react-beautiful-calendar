// STYLES IMPORT
import styles from './Year.module.css'

const Year = (props) => {

    const styles__ = {
        fontFamily: `${props.fontName}, sans-serif`,
    }

    return (
        <button className={styles.calendar__year__btn} onClick={props.yearClicker} style={styles__} >
            {props.children}
        </button>
    )
}

export default Year
