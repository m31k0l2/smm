import React from "react"
import styles from "./rsidebar.module.css"
import { FaFilter, FaVk } from 'react-icons/fa'
import SideBarButton from "../button/button"
import Calendar from 'react-calendar'
import Button from '../../button/button'
import Account from '../../accountLink/accountLink'

export default class LSideBar extends React.Component {
    state = { isToggleOn: true }
    handleClick = () => this.setState({ isToggleOn: !this.state.isToggleOn })
    handleClickHat = () => this.setState({ isToggleOn: !this.state.isToggleOn ? !this.state.isToggleOn : this.state.isToggleOn })

    render() {
        const styleName = this.state.isToggleOn ? '' : 'hideSidebar'
        return (
        <div className={[styles.sidebar, styles.transform, styles[styleName]].join(' ')}>
            <div className={styles.hat} onClick={this.handleClickHat}>
                <div><i><FaFilter/></i><span>Фильтр постов</span></div>
            </div>
            <div className={styles.body}>
                <div className={[styles.filterItem, styles.item].join(" ")}>
                    <label htmlFor="fId">По ID поста</label><input id="fId" type="number" min="0" />
                </div>
                <div className={[styles.filterItem, styles.item, styles.fPeriod].join(" ")}>
                    <b>По периоду</b><a href="" className={styles.selected}>3</a>/<a href="">7</a>/<a href="">30</a><b>дней</b>
                </div>
                <div className={[styles.calendar, styles.item].join(" ")}>
                    <Calendar />
                </div>
                {/* <div className={[styles.projectFilter, styles.fProject].join(" ")}>
                    <label htmlFor="fPrj">Проект</label>
                    <select id="fPrj" style={{width: "100%", marginTop: 10, lineHeight: "2em", backgroundColor: "white"}}>
                        <option value="">--Все--</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                    </select>
                </div> */}
                <div className={[styles.accountFilter, styles.item].join(" ")}>
                    <input type="checkbox" defaultChecked="checked" id="user" />
                    <label htmlFor="user" className={styles.account} style={{fontSize: "0.8em"}} >
                        <Account title="Roland Dischein"/>
                    </label>
                </div>
                <div className={styles.item} style={{fontSize: "0.8em"}}>
                    <Button title="Сбросить фильтры" icon="cancel"/>
                </div>
                <div className={styles.empty}></div>
                <div onClick={this.handleClick} className={styles.button}>
                    <SideBarButton 
                        icon={!this.state.isToggleOn ? "left" : "right"} 
                        title={"Свернуть"} 
                        isToggleOn={this.state.isToggleOn} 
                        height={40} 
                        iconAlign={'right'}
                    />
                </div>
            </div>
        </div>
        );
    }
}