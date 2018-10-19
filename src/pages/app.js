import React from "react"
import LSidebar from "../components/lsidebar"
import RSidebar from "../components/rsidebar"
import styles from "./app.module.css"

export default () => (    
  <div className={styles.container}>
    <div className={styles.lsidebar}><LSidebar /></div>
    <div className={styles.main}></div>
    <div className={styles.rsidebar}><RSidebar /></div>
  </div>
)