import React from "react"
import LSidebar from "../sidebar/lsidebar/connectedLSidebar"
import RSidebar from "../sidebar/rsidebar/connectedRSidebar"
import MainPage from "../main/main"
import styles from "./postLayout.module.css"

export default () => (    
  <div className={styles.container}>
    <div className={styles.lsidebar}><LSidebar selectId={1} /></div>
    <div className={styles.main}>
      <MainPage />
    </div>
    <div className={styles.rsidebar}><RSidebar /></div>
  </div>
)