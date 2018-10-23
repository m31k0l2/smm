import React from "react"
import styles from "./rsidebar.module.css"
import { FaFilter } from 'react-icons/fa'
import SideBarButton from "../button/button"
import Calendar from 'react-calendar'
import Button from '../../button/button'
import Account from '../../accountLink/accountLink'

export default ({isToggleOn, handleClick}) => (
    <div className={[styles.sidebar, styles.transform, styles[isToggleOn ? '' : 'hideSidebar']].join(' ')}>
        <div className={styles.hat} onClick={!isToggleOn ? handleClick : null}>
            <div><i><FaFilter/></i><span>Фильтр постов</span></div>
        </div>
        <div className={styles.body}>
            <div className={[styles.filterItem, styles.item].join(" ")}>
                <label htmlFor="fId">По ID поста</label><input id="fId" type="number" min="0" />
            </div>
            <div className={[styles.filterItem, styles.item, styles.fPeriod].join(" ")}>
                <b>По периоду</b><a href="" className={styles.selected}>3</a>/<a href="">7</a>/<a href="">30</a><b>дней</b>
            </div>
            <div className={[styles.calendar, styles.item].join(" ")}>
                <Calendar />
            </div>
            <div className={[styles.accountFilter, styles.item].join(" ")}>
                <input type="checkbox" defaultChecked="checked" id="user" />
                <label htmlFor="user" className={styles.account} style={{fontSize: "0.8em"}} >
                    <Account title="Roland Dischein"/>
                </label>
            </div>
            <div className={styles.item} style={{fontSize: "0.8em"}}>
                <Button title="Сбросить фильтры" icon="cancel"/>
            </div>
            <div className={styles.empty}></div>
            <div onClick={handleClick} className={styles.button}>
                <SideBarButton 
                    icon={!isToggleOn ? "left" : "right"} 
                    title={"Свернуть"} 
                    isToggleOn={isToggleOn} 
                    height={40} 
                    iconAlign={'right'}
                />
            </div>
        </div>
    </div>
)