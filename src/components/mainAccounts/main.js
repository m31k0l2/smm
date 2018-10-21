import React from "react"
import styles from "./main.module.css"
import Footer from '../footer/footer'
// import Button from '../button/button'

class Main extends React.Component {    
    render() {
        return (
            <div className={styles.main}>        
                <div className={styles.content}>           
                    <h1>Accounts</h1>
                </div>
                <Footer />
            </div>
        )
    }
}
export default Main;