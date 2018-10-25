import React from "react"
import styles from "./lsidebar.module.scss"
import Button from "../button/button"
import Item from "../item/item"

export default ({isToggleOn, handleClick, selectId}) => (
    <div className={[styles.sidebar, styles.transform, styles[isToggleOn ? '' : 'hideSidebar']].join(' ')}>
        <div onClick={handleClick} className={styles.button}>
            <Button 
                icon={isToggleOn ? "left" : "right"} 
                title={"Свернуть"} 
                isToggleOn={isToggleOn} 
                height={30} 
            />
        </div>
        <div data-descr="Посты" className={styles.item}>
            <Item 
                icon={"post"} 
                title={"Посты"} 
                to={"/post/"}
                height={55} 
                isToggleOn={isToggleOn} 
                isSelected={selectId === 1} 
            />
        </div>
        <div data-descr="Аккаунты" className={styles.item}>
            <Item 
                icon={"accounts"} 
                title={"Аккаунты"} 
                to={"/accounts/"}
                height={55} 
                isToggleOn={isToggleOn} 
                isSelected={selectId === 2} 
            />
        </div>
        <div className={styles.empty}></div>
        <div className={styles.button}>
            <Button icon={"exit"} title={"Выход"} height={40} isToggleOn={isToggleOn} />
        </div>
    </div>
)