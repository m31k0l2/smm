import React from "react"
import styles from "./tabPane.module.scss"
import { FaVk } from 'react-icons/fa'
import Accounts from "./socialAccounts"
import Button from "../button/button"

const RemoveButton = () => (
	<div style={{fontSize: "0.8em", paddingTop: "1em", marginLeft: -10}}><Button title="отключить аккаунт" size="normal" color="blue" icon="delUser" /></div>
)

export default () => (
    <div className={styles.container}>	    
	    <input type="radio" name="selector" id="tab1" className={styles.tab1} defaultChecked/><label htmlFor="tab1">Все</label>
	    <input type="radio" name="selector" id="tab2" className={styles.tab2}/><label htmlFor="tab2"><i><FaVk /></i> ВКонтакте</label>
	    <div className={styles.content}>
	        <div className={styles.content1}>
	            <Accounts group="all"/>
				<RemoveButton />
	        </div>
	        <div className={styles.content2}>
				<Accounts group="vk"/>
				<RemoveButton />
	        </div>
	    </div>
	</div>
)