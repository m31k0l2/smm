import React from "react"
import styles from "./rsidebar.module.scss"
import { FaFilter } from 'react-icons/fa'
import SideBarButton from "../button/button"
import SidebarContent from "./sidebarContent"

export default ({isToggleOn, accounts, handleClick}) => (
    <div className={[styles.sidebar, styles.transform, styles[isToggleOn ? '' : 'hideSidebar']].join(' ')}>
        <div className={styles.hat} onClick={!isToggleOn ? handleClick : null}>
            <div><i><FaFilter/></i><span>Фильтр постов</span></div>
        </div>
        <div className={styles.body}>
            <SidebarContent accounts={accounts}/>
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