// REACT IMPORTS
import React from 'react'

// DEFAULT DATA IMPORT
import { indexToMonth, indexToMonthFull } from '../../../data/data'

// STYLES IMPORT
import styles from './Month.module.css'

const Month = ({ monthClicker, variant, color = "#000000", bgColor = "transparent", hoverColor = "#e9e9e9", size = 16, fontName, children}) => {
    let month__ = ''
    
    if(variant === 'singleY') {
        month__ = indexToMonth[children]
    }
    else {
        month__ = indexToMonthFull[children]
    }

    const styles__ = {
        color: color,
        fontSize: `${size}px`,
        fontFamily: `${fontName}, sans-serif`,
        backgroundColor: bgColor,
        "hover": {
            backgroundColor: hoverColor
        }
    }

    return (
        <button className={styles.calendar__month__btn} onClick={monthClicker} style={styles__} >{month__}</button>
    )
}

export default Month
