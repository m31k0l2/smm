import React from "react"
import styles from "./button.module.css"
import { FaBan, FaPaperPlane, FaCheck, FaImage, FaLink } from 'react-icons/fa'

const colorScheme = {
    "gray": styles.gray,
    "blue": styles.blue
}
const icons = {
    "none": "",
    "cancel": <i><FaBan/></i>,
    "post": <i><FaPaperPlane/></i>,
    "ok": <i><FaCheck/></i>,
    "image": <i><FaImage/></i>,
    "link": <i><FaLink/></i>
}
const sizeList = {
    "small": "2px 5px",
    "normal": "5px 10px"
}
export default ({title="react", color="gray", icon="none", size="normal"}) => (
    <a href="#" className={[styles.button, colorScheme[color]].join(" ")} style={{padding: sizeList[size]}}>
        {icons[icon]}
        <span>{title}</span>
    </a>
)