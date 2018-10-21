import React from "react"
import styles from "./dialog.module.css"
import Button from "../button/button"
import { FaBan } from 'react-icons/fa'
import Account from '../accountLink/accountLink'

class Dialog extends React.Component {
    showModal = () => {
        this.dialog.showModal();
    }
    close = () => {
        this.dialog.close();
    }
    render() {
        return (
            <dialog id="dialog" className={styles.postDialog} ref={(dialog) => { this.dialog = dialog; }}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <h2>Планирование нового поста</h2>
                        <span onClick={this.close} className={styles.close}><Button title="x" color="blue" size="small"/></span>
                    </div>
                    <div className={styles.info}>
                        <hr />
                        <span>Перетаскивайте фото и видео файлы на эту форму, а также картинки из браузера.</span>            
                    </div>
                    <div>
                        <textarea name="text" placeholder="Текст поста"></textarea>
                    </div>
                    <div className={styles.buttons}>
                        <span><Button icon="image" title="Фото/видео" size="small"/></span>
                        <span><Button icon="link" title="Ссылка" size="small"/></span>
                    </div>
                    <div className={styles.checks}>
                        <div><input type="checkbox" id="delAfter" /><label htmlFor="delAfter">Автоматически удалить через...</label></div>
                        <div><input type="checkbox" id="delAfter" /><label htmlFor="delAfter">Отметить как рекламу (ВКонтакте)</label></div>
                    </div>
                    <div className={styles.socPages}>
                        <div><h3>Социальные страницы</h3></div>
                        <div className={styles.refs}>
                            <a href="#">установить одно время</a>
                            <span>/</span>
                            <a href="#">сейчас</a>
                        </div>
                    </div>
                    <div className={styles.accounts}>
                        <div>
                            <Account title="Roland Dischein" isClickable={false} />
                            <input type="date" value="2018-10-21" />
                            <span>в</span>
                            <input type="time" value="18:10" />
                            <a href=""><FaBan/></a>
                        </div>
                    </div>
                    <div className={styles.dialogButtons}>
                        <div>
                            <span onClick={this.close}><Button icon="ok" title="OK" size="small" color="blue"/></span>
                            <span onClick={this.close}><Button icon="cancel" title="Отмена" size="small" color="blue"/></span>
                        </div>
                    </div>
                </div>
            </dialog>
        )
    }
}
export default Dialog