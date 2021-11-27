// REACT IMPORTS
import React, { useState } from 'react'

// STYLES IMPORT
import styles from './Year.module.css'

const Year = ({ yearClicker, size = 16,  color = "#000000", bgColor = "transparent", hoverColor = "#e9e9e9", fontName, children }) => {

    const [isHover, setIsHover] = useState(false)

    const mouseHoverHandler = () => {
        isHover ? setIsHover(false) : setIsHover(true)
    }

    const styles__ = {
        color: color,
        fontSize: `${size}px`,
        fontFamily: `${fontName}, sans-serif`,
        backgroundColor: bgColor,
    }

    return (
        <button className={`${styles.calendar__year__btn} ${isHover ? styles.active__hover : null}`} onClick={yearClicker} style={styles__} onMouseEnter={mouseHoverHandler} onMouseLeave={mouseHoverHandler}>
            {children}
        </button>
    )
}

export default Year
