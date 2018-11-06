import React from "react"
import Account from '../accountLink/accountLink'
import styles from "./socialAccounts.module.scss"
import {connect} from "react-redux"

const SocialAccount = ({title, group, check}) => {
    
    return (
    <div className={styles.sa}>
        <label><input type="radio" name={group}/><Account title={title} isClickable={false}/></label>
    </div>
)}

const accounts = ({ACCOUNTS, group}) => (
    <div>
        { ACCOUNTS.map( (title, index) => <SocialAccount title={title} key={index} group={group} check={index===1}/> )}
    </div>
)

export default connect(({ ACCOUNTS }) => ({ ACCOUNTS }), null)(accounts)