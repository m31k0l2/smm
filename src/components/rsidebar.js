import React from "react"
import styles from "./rsidebar.module.css"
import { FaSignOutAlt, FaAddressBook, FaAngleLeft, FaAngleRight, FaFilter, FaEnvelopeSquare } from 'react-icons/fa';

export default class LSideBar extends React.Component {
    state = { isToggleOn: true }
    isToggleOn = true
    handleClick = () => this.setState({ isToggleOn: !this.state.isToggleOn })

    render() {
        const styleName = this.state.isToggleOn ? '' : 'hideSidebar'
        return (
        <div className={[styles.sidebar, styles.transform, styles[styleName]].join(' ')}>
            <div className={styles.hat}>
                <div><i><FaFilter/></i><span>Фильтр постов</span></div>
            </div>
            <div className={styles.body}>
                <div className={[styles.filterItem, styles.item].join(" ")}>
                    <label>По ID поста</label><input type="number" min="0" />
                </div>
                <div className={[styles.calendar, styles.item].join(" ")}>
                    <label>Период с</label><input type="date" min="2018-10-01" max="2019-10-01" />
                    <label>по</label><input type="date" min="2018-10-01" max="2019-10-01" />
                </div>
                <div className={[styles.projectFilter, styles.item].join(" ")}>
                    <label>Проект</label>
                    <select>
                        <option value="">--Все--</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                    </select>
                </div>
                <div className={[styles.accountFilter, styles.item].join(" ")}>
                    <label><input type="checkbox" checked="checked" />Roland Dischein</label>
                </div>
                <div className={styles.item}>
                    <button>Сбросить фильтры</button>
                </div>
                <div className={styles.empty}></div>
                <div className={[styles.hide, styles.item].join(" ")}>
                    <a href="#" onClick={this.handleClick}><span>Спрятать</span><i><FaAngleRight/></i></a>
                </div>
            </div>
        </div>
        );
    }
}