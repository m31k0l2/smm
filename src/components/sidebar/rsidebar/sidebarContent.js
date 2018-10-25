import React from "react"
import styles from "./sidebarContent.module.scss"
import Calendar from 'react-calendar'
import Button from '../../button/button'
import AccountFilter from "./accountFilter"

export default ({accounts}) => (
    <div className={styles.content}>
        <div className={[styles.filterItem, styles.item].join(" ")}>
            <label htmlFor="fId">По ID поста</label><input id="fId" type="number" min="0" />
        </div>
        <div className={[styles.filterItem, styles.item, styles.fPeriod].join(" ")}>
            <b>По периоду</b><a href="" className={styles.selected}>3</a>/<a href="">7</a>/<a href="">30</a><b>дней</b>
        </div>
        <div className={[styles.calendar, styles.item].join(" ")}>
            <Calendar />
        </div>
        <div className={styles.item}><AccountFilter data={accounts}/></div>
        <div className={styles.item} style={{fontSize: "0.8em"}}>
            <Button title="Сбросить фильтры" icon="cancel"/>
        </div>
    </div>
)