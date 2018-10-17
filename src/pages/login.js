import React from "react"
import styles from "./login.module.css"
import { Link } from "gatsby"
// import { GridContainer, GridItem } from "react-css-grid-layout"
import { FaVk } from 'react-icons/fa';

export default () => (

<div className={styles.wrapper}>
    <div className={styles.header}><h4>SMM-PUBLISHER: система управления постами в социальных сетях</h4></div>
    <div className={styles.content}>
        <h2>Войти</h2>
        <p>Пожалуйста, войдите с одним из ваших социальных аккаунтов.</p>
        <Link to="/app/" className={styles.vk} data-vk><i className={styles.vkIcon}><FaVk/></i><span>Войти с ВКонтакте</span></Link>
    </div>
    <div className={styles.footer}><h4>m31k0l2@gmail.com (2018)</h4></div>
</div>)