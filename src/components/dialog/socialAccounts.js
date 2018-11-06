import React from "react"
import { FaBan } from 'react-icons/fa'
import Account from '../accountLink/accountLink'
import styles from "./socialAccounts.module.scss"

const SocialAccount = ({title, date, time, disabled}) => (
    <div className={styles.sa}>
        <Account title={title} isClickable={false} />
        <input type="date" defaultValue={date} disabled={disabled} />
        <span>в</span>
        <input type="time" defaultValue={time} disabled={disabled} />
        <a href="#"><FaBan/></a>
    </div>
)

export default ({recipients, disabled}) => (
    <div>
        { recipients.map(
            ( {account, date, time} ) => <SocialAccount title={account} date={date} time={time} disabled={disabled} key={Math.random()}/> 
        )}
    </div>
)
