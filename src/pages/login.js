import React from "react"
import styles from "./login/login.module.scss"
import { FaVk } from 'react-icons/fa'
import Footer from '../components/footer/footer'
import { connect } from "react-redux"
import { navigate } from "gatsby"
import Cookies from 'universal-cookie'

class Layout extends React.Component {    
    componentWillReceiveProps(props) {
        const {LOGIN} = props
        if (LOGIN.token) {
            window.history.pushState(null, null, "/")
            navigate('/post/')
        }
    }

    componentWillMount() {
        const cookies = new Cookies()
        const user = cookies.get("user")
        if (user) {            
            this.props.auth({social: user.social, token: user.token, userID: user.id, name: null});
            navigate('/post/')
        }
    }    

    login = () => {
        const APP_ID = 6741984
        const REDIRECT_URI = "http://localhost:8000/login"
        const url = `https://oauth.vk.com/authorize?client_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&display=page&scope=wall,offline&response_type=token&v=5.85`
        window.location.replace(url)
    }

    render() {
        const hash = window.location.hash;        
        if (hash !== "") {
            const token = /access_token=([^&]+)/g.exec(hash)[1];
            const id = /user_id=([^&]+)/g.exec(hash)[1];
            this.props.auth({social: "vk", token: token, userID: id, name: null});
        }        
        return (
            <div className={styles.wrapper}>
                <div className={styles.header}><h4>SMM-PUBLISHER: система управления постами в социальных сетях</h4></div>
                <div className={styles.content}>
                    <h2>Войти</h2>
                    <p>Пожалуйста, войдите с одним из ваших социальных аккаунтов.</p>
                    <span className={styles.vkButton} onClick={this.login}><i className={styles.vkIcon}><FaVk/></i><span>Войти с ВКонтакте</span></span>
                </div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = ({ LOGIN }) => {
    return { LOGIN }
}
  
const mapDispatchToProps = dispatch => {
    return { 
        auth: user => dispatch({ type: `AUTH`, user: user }),
        login: () => dispatch({ type: `LOGIN` })
    }
}
  
const ConnectedLayout = connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout)

export default ConnectedLayout