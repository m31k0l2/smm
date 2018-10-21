import React from "react"
import styles from "./login/login.module.css"
import { Link } from "gatsby"
import { FaVk } from 'react-icons/fa';
import Footer from '../components/footer/footer'

export default () => (
<div className={styles.wrapper}>
    <div className={styles.header}><h4>SMM-PUBLISHER: система управления постами в социальных сетях</h4></div>
    <div className={styles.content}>
        <h2>Войти</h2>
        <p>Пожалуйста, войдите с одним из ваших социальных аккаунтов.</p>
        <Link to="/post/" className={styles.vk} data-vk><i className={styles.vkIcon}><FaVk/></i><span>Войти с ВКонтакте</span></Link>
    </div>
    <Footer />
</div>)