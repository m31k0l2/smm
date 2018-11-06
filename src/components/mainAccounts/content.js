import React from "react"
import styles from "./content.module.scss"
import { FaInfo } from 'react-icons/fa'
import { VkButton } from "../socialButton/socialButton"
import Accounts from "./accounts"

const login = () => {
    const APP_ID = 6741984
    const REDIRECT_URI = "http://localhost:8000/accounts"
    const url = `https://oauth.vk.com/authorize?client_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&display=page&scope=wall,offline&response_type=token&v=5.85`
    window.location.replace(url)
}

export default () => (
    <div className={styles.content}>
        <div>
            <h2>Добавить социальный аккаунт</h2>            
            <div className={styles.info}>
                <i><FaInfo /></i>
                <p>Чтобы подключить более чем один аккаунт одной социальной сети, необходимо в первую очередь убедиться, что вы вышли из неё.
                    Для этого, просто откройте сайт социальной сети в другой вкладке браузера и при необходимости выйдите из неё.</p>
            </div>    
            <div className={styles.socialButtons}>
                <VkButton action={login}/>
            </div>
            <div className={styles.info}>
                <i><FaInfo /></i>
                <p>После подключения аккаунта, все страницы, группы и паблики, где у Вас есть права на публикацию, будут доступны в списке страниц при планировании поста.</p>
            </div>        
        </div>
        <div>
            <h2>Прикрепленные контакты</h2>
            <Accounts />
        </div>
    </div>
)