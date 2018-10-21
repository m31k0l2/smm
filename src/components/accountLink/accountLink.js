import React from "react"
import styles from "./accountLink.module.css"
import { FaVk } from 'react-icons/fa'

const clickable = {
    true: styles.clickable,
    false: ""
}
export default ({title="accName", isClickable=true}) => (
    <span className={[styles.account, clickable[isClickable]].join(" ")}><i><FaVk /></i><span>{title}</span></span>
)