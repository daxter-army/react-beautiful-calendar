import React from 'react'

import styles from './YearsX.module.css'

const YearsX = (props) => {
    const ChevronLeft = "https://raw.githubusercontent.com/daxter-army/react-beautiful-calendar/main/src/assets/chevron-left-years.png?token=AL3MMOBL34LGKMAKNVJJ6GDBUZNK4"
    const ChevronRight = "https://raw.githubusercontent.com/daxter-army/react-beautiful-calendar/main/src/assets/chevron-right-years.png?token=AL3MMOCJFGQT5W7SBUAQ7KLBUZNL6"

    return (
        <div className={styles.YearsX__wrapper}>
            <button className={styles.shuffleX__buttons} onClick={props.onLeftClick}><img className={styles.shuffle__button__img} src={ChevronLeft} alt="shuffle-btn-img"/></button>
                {/* <div className={styles.yearsX__years}> */}
                    {
                        props.years.map((year, index) => <div key={index} className={styles.yearsX__year__item}><span className={`${styles.yearsX__year__span} ${props.currYear === year ? styles.yearsX__current__year : null}` } onClick={() => props.yearChangeClicker(year)}>{year}</span></div>)
                    }
                {/* </div> */}
            <button className={styles.shuffleX__buttons} onClick={props.onRightClick}><img className={styles.shuffle__button__img} src={ChevronRight} alt="shuffle-btn-img"/></button>
        </div>
    )
}

export default YearsX
