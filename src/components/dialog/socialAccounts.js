import React from "react"
import { FaBan } from 'react-icons/fa'
import Account from '../accountLink/accountLink'
import styles from "./socialAccounts.module.scss"

const SocialAccount = ({title}) => (
    <div className={styles.sa}>
        <Account title={title} isClickable={false} />
        <input type="date" defaultValue="2018-10-21" />
        <span>в</span>
        <input type="time" defaultValue="18:10" />
        <a href="#"><FaBan/></a>
    </div>
)

export default ({data}) => (    
    <div>
        { data.map(
            ( title, index ) => <SocialAccount title={title} key={index}/> 
        )}
    </div>
)
