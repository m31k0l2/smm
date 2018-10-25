import React from "react"
import styles from "./main.module.css"
import Footer from '../footer/footer'
import Button from '../button/button'
import Dialog from "../dialog/dialog"
import { connect } from "react-redux"

class Main extends React.Component {
    state = {
        dialog: null
    }
    
    show = () => { this.dialog.showModal() }
    
    render() {
        const { ACCOUNTS } = this.props
        return (
            <div className={styles.main}>        
                <div className={styles.content}>           
                    <Dialog ref={ref => { this.dialog = ref }} accounts={ACCOUNTS}/> 
                    <span style={{fontSize: "0.8em"}} onClick={this.show}><Button title="Запланировать пост" color="blue" icon="post"/></span>
                    <span className={styles.nothingYet}>Пока ничего не запланировано!</span>
                </div>
                <Footer />
            </div>
        )
    }
}
  
export default connect(({ ACCOUNTS }) => ({ ACCOUNTS }), null)(Main)