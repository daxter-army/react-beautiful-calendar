import React from 'react'

import { indexToMonth } from '../../../../data/data'

import styles from './MonthsX.module.css'

const MonthsX = (props) => {
    return (
        <div className={styles.MonthsX__wrapper}>
            {
                props.months.map((month, index) => {
                    return  (
                        <div className={styles.MonthsX__month__items} key={index}>
                            <span onClick={() => props.monthChangeClicker(month)} className={`${styles.monthsX__month__span} ${indexToMonth[props.activeMonth] === month ? styles.active__month__span : null}`}>
                                {month}
                            </span>
                        </div>
                    ) 
                })
            }
        </div>
    )
}

export default MonthsX
