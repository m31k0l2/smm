import React from "react"
import LSidebar from "../sidebar/lsidebar/lsidebar"
import MainAccounts from "../mainAccounts/main"
import styles from "./app.module.css"

export default () => (    
  <div className={styles.container}>
    <div className={styles.lsidebar}><LSidebar selectId={2} /></div>
    <div className={styles.main}>
      <MainAccounts />
    </div>
  </div>
)