import React from "react"
import styles from "./lsidebar.module.css"
import { FaSignOutAlt, FaAddressBook, FaAngleLeft, FaAngleRight, FaRegAddressCard, FaEnvelopeSquare } from 'react-icons/fa';

export default class LSideBar extends React.Component {
    state = { isToggleOn: true }
    isToggleOn = true
    handleClick = () => this.setState({ isToggleOn: !this.state.isToggleOn })

    render() {
        const styleName = this.state.isToggleOn ? '' : 'hideSidebar'
        return (
        <div className={[styles.sidebar, styles.transform, styles[styleName]].join(' ')}>
            <div className={[styles.button, styles.hide].join(' ')}><a className={styles.hideRef} href="#" onClick={this.handleClick}><i>{this.state.isToggleOn ? <FaAngleLeft/> : <FaAngleRight/>}</i><span className={styles.transform}>Свернуть</span></a></div>
            <div data-descr="Настройки" className={styles.item}><a href="#"><i><FaRegAddressCard/></i><span className={styles.transform}>ih8unem@gmail.com</span></a></div>
            <div data-descr="Посты" className={[styles.item, styles.active].join(' ')}><a href="#"><i><FaEnvelopeSquare/></i><span className={styles.transform}>Посты</span></a></div>
            <div data-descr="Аккаунты" className={styles.item}><a href="#"><i><FaAddressBook/></i><span className={styles.transform}>Аккаунты</span></a></div>
            <div className={styles.empty}></div>
            <div className={[styles.button, styles.exit].join(' ')}><a className={styles.exitRef} href="#"><i><FaSignOutAlt/></i><span className={styles.transform}>Выйти</span></a></div>
        </div>
        );
    }
}