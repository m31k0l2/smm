import React from "react"
import LSidebar from "../sidebar/lsidebar/lsidebar"
import RSidebar from "../sidebar/rsidebar/rsidebar"
import MainPage from "../main/main"
import styles from "./app.module.css"

export default () => (    
  <div className={styles.container}>
    <div className={styles.lsidebar}><LSidebar selectId={1} /></div>
    <div className={styles.main}>
      <MainPage />
    </div>
    <div className={styles.rsidebar}><RSidebar /></div>
  </div>
)