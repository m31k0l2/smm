import React from "react"
import styles from "./main.module.css"
import Footer from '../footer/footer'
import Content from "./content"

class Main extends React.Component {    
    render() {
        return (
            <div className={styles.main}>        
                <div className={styles.content}>           
                    <Content />
                </div>
                <Footer />
            </div>
        )
    }
}
export default Main;