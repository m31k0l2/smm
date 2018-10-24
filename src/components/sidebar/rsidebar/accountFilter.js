import React from "react"
import styles from "./accountFilter.module.css"
import Account from '../../accountLink/accountLink'

const AccountCheckbox = ({title}) => (
    <label className={styles.accountFilter}>
        <input type="checkbox" defaultChecked="checked" />        
        <Account title={title}/>
    </label>
)

export default ({data}) => (    
    <div>
        { data.map(
            ( title, index ) => <AccountCheckbox title={title} key={index}/> 
        )}
    </div>
)