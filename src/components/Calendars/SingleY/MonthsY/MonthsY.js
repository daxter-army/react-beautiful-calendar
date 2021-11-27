import React from 'react'

// DEFAULT DATA IMPORT
import { indexToMonth } from '../../../../data/data'

import styles from './MonthsY.module.css'

const MonthsY = (props) => {
    return (
        <div className={styles.monthsY__months__wrapper}>
            {
                props.months.map((item, index) => {
                    return (
                        <div key={index} className={styles.monthsY__months__items}>
                            <span onClick={() => props.monthChangeClicker(item)} className={`${styles.monthsY__month__span} ${indexToMonth[props.activeMonth] === item ? styles.active__month__span : null}`}>
                                {item}
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MonthsY
