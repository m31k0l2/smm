import React from "react"
import styles from "./lsidebar.module.css"
import Button from "../button/button"
import Item from "../item/item"

export default class LSideBar extends React.Component {
    state = { 
        isToggleOn: true
    }

    isToggleOn = true
    
    handleClick = () => this.setState({ isToggleOn: !this.state.isToggleOn })

    render() {
        const {
            selectId
        } = this.props;
        const styleName = this.state.isToggleOn ? '' : 'hideSidebar'
        return (
        <div className={[styles.sidebar, styles.transform, styles[styleName]].join(' ')}>
            <div onClick={this.handleClick} className={styles.button}>
                <Button 
                    icon={this.state.isToggleOn ? "left" : "right"} 
                    title={"Свернуть"} 
                    isToggleOn={this.state.isToggleOn} 
                    height={30} 
                />
            </div>
            {/* <div data-descr="Профиль" className={styles.item}>
                <Item icon={"userProf"} title={"ih8unem@gmail.com"} height={55} isToggleOn={this.state.isToggleOn} />
            </div> */}
            <div data-descr="Посты" className={styles.item} onClick={this.handlePostClick}>
                <Item 
                    icon={"post"} 
                    title={"Посты"} 
                    to={"/post/"}
                    height={55} 
                    isToggleOn={this.state.isToggleOn} 
                    isSelected={selectId === 1} 
                />
            </div>
            <div data-descr="Аккаунты" className={styles.item} onClick={this.handleAccountsClick}>
                <Item 
                    icon={"accounts"} 
                    title={"Аккаунты"} 
                    to={"/accounts/"}
                    height={55} 
                    isToggleOn={this.state.isToggleOn} 
                    isSelected={selectId === 2} 
                />
            </div>
            <div className={styles.empty}></div>
            <div className={styles.button}>
                <Button icon={"exit"} title={"Выход"} height={40} isToggleOn={this.state.isToggleOn} />
            </div>
        </div>
        );
    }
}