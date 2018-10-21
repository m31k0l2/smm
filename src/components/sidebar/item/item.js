import React from 'react';
import { FaAddressBook, FaRegAddressCard, FaEnvelopeSquare } from 'react-icons/fa';
import styles from "./item.module.css"
import { Link } from "gatsby"

const faIcon = {
    "none": "",
    "userProf": <i><FaRegAddressCard/></i>,
    "post": <i><FaEnvelopeSquare/></i>,
    "accounts": <i><FaAddressBook/></i>
}

export default ({ title='React', icon='none', height=40, isToggleOn=true, isSelected=false, to="/#/" }) => (
    <div style={ {height: height} }>
        <Link to={to}className={styles.link}>
            <div className={[styles.button, styles.item, isSelected ? styles.selected : ""].join(" ")}>
                {faIcon[icon]}
                { isToggleOn ? <span className={styles.hRef}>{title}</span> : "" }
            </div>
        </Link>
    </div>
)