import React from "react"
import LSidebar from "../sidebar/lsidebar/connectedLSidebar"
import MainAccounts from "../mainAccounts/main"
import styles from "./accountLayout.module.css"

export default () => (    
  <div className={styles.container}>
    <div className={styles.lsidebar}><LSidebar selectId={2} /></div>
    <div className={styles.main}>
      <MainAccounts />
    </div>
  </div>
)