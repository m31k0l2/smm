import React from 'react';
import { FaAddressBook, FaEnvelopeSquare, FaVk } from 'react-icons/fa';
import styles from "./item.module.scss"
import { Link } from "gatsby"
import ReactLoading from 'react-loading'

const faIcon = {
    "none": "",
    "post": <i><FaEnvelopeSquare/></i>,
    "accounts": <i><FaAddressBook/></i>,
    "vk": <i><FaVk/></i>
}

const Item = ({ title, icon, isToggleOn=true, isSelected=false, clickable=true }) => (
    <div className={[styles.button, styles.item, isSelected ? styles.selected : "", clickable ? styles.clickable : ""].join(" ")}>
        { faIcon[icon] }
        { isToggleOn ? <span className={styles.hRef}>{title}</span> : "" }    
    </div>
)

export default ({ title='React', icon='none', height=40, isToggleOn=true, isSelected=false, to="", clickable=true }) => {
    if (!title) return (
        <div style={ {height: height } }><ReactLoading type={"bubbles"} color={"#365b86"} height={20} /></div>)
    return (
    <div style={ {height: height} }>
        {
            clickable ?
            <Link to={to}className={styles.link}>
                <Item title={title} icon={icon} isToggleOn={isToggleOn} isSelected={isSelected}/>
            </Link> :
            <Item title={title} icon={icon} isToggleOn={isToggleOn} isSelected={isSelected} clickable={false}/>
        }        
    </div>
)}