import React from "react"
import styles from "./login.module.css"
import { Link } from "gatsby"
// import { GridContainer, GridItem } from "react-css-grid-layout"

export default () => (

<div className="wrapper">
    <div className={styles.header}><h4>SMM-PUBLISHER: система управления постами в социальных сетях</h4></div>
    <div className={styles.content}>
        <h2>Войти</h2>
        <p>Пожалуйста, войдите с одним из ваших социальных аккаунтов.</p>
        <a href="#" className={styles.button} data-vk>Войти в ВКонтакте</a>
    </div>
    <div className={styles.footer}><h4>m31k0l2@gmail.com (2018)</h4></div>
</div>)