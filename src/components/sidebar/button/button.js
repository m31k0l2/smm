import React from 'react';
import { FaAngleLeft, FaAngleRight, FaSignOutAlt, FaVk } from 'react-icons/fa';
import styles from "./button.module.scss"

const faIcon = {
    "none": "",
    "left": <i><FaAngleLeft/></i>,
    "right": <i><FaAngleRight/></i>,
    "exit": <i><FaSignOutAlt/></i>
}

export default ({ title = 'React', icon = 'none', height = 40, isToggleOn = true, iconAlign = 'left' }) => (
    <div style={ {height: height} } className={[styles.button, styles.center].join(" ")}>
        {iconAlign === 'left' ? faIcon[icon] : ''}
        { isToggleOn ? <span className={styles.hRef}>{title}</span> : "" }
        {iconAlign === 'right' ? faIcon[icon] : ''}
    </div>
)