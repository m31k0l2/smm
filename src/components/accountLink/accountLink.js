import React from "react"
import styles from "./accountLink.module.css"
import { FaVk } from 'react-icons/fa'

const clickable = {
    true: styles.clickable,
    false: ""
}
export default ({title="accName", isClickable=true, font="normal"}) => (
    <span className={[styles.account, clickable[isClickable], styles[font]].join(" ")}><i><FaVk /></i><span>{title}</span></span>
)