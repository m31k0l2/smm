import React from "react"
import styles from "./content.module.scss"
import { FaInfo } from 'react-icons/fa'
import { VkButton } from "../socialButton/socialButton"
import Accounts from "./accounts"

export default () => (
    <div className={styles.content}>
        <div>
            <h2>Добавить социальный аккаунт</h2>
            <div className={styles.socialButtons}>
                <VkButton />
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