import React from "react"
import styles from "./dialog.module.scss"
import Button from "../button/button"
import SocialAccounts from "./socialAccounts"

class Dialog extends React.Component {
    showModal = () => {
        this.dialog.showModal();
    }
    close = () => {
        this.dialog.close();
    }
    getDate = () => {
        const date = new Date(); 
        const y = date.getFullYear();
        let m = date.getMonth()+1;
        let d = date.getDate();
        if (m.length === 1) m = "0" + m;
        if (d.length === 1) m = "0" + d;
        return y + "-" + m + "-" + d;
    }
    getTime = () => {
        const date = new Date();   
        let h = `${date.getHours()}`;
        let m = `${date.getMinutes()}`;
        if (h.length === 1) h = "0" + h;
        if (m.length === 1) m = "0" + m;
        return h + ":" + m;
    }
    state = {
        recipients: null, date: this.getDate()
    }
    componentWillReceiveProps(props) {
        const {post} = props;
        if (post) {
            const {recipients, text} = post;            
            this.setState({text: text, recipients: recipients});
        } else {
            this.setState({text: "", recipients: null});
        }
    }
    handleChange = event => {
        this.setState({text: event.target.value});
    }
    render() {
        const {accounts} = this.props;
        if (this.state.recipients) {
            this.recipients = this.state.recipients;
            this.disabled = true;
        } else {
            this.recipients = accounts.map(account => 
                { return { 
                    "account": account,
                    "social": "vk",
                    "date": this.getDate(),
                    "time": this.getTime(),
                } }
            );
            this.disabled = false;
        }
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
                        <textarea name="text" placeholder="Текст поста" value={this.state.text} onChange={this.handleChange}/>
                    </div>
                    <div className={styles.buttons}>
                        <span><Button icon="image" title="Фото/видео" size="small"/></span>
                        <span><Button icon="link" title="Ссылка" size="small"/></span>
                    </div>
                    <div className={styles.checks}>
                        {/* <div><input type="checkbox" id="delAfter" /><label htmlFor="delAfter">Автоматически удалить через...</label></div> */}
                        <div><input type="checkbox" id="ad" /><label htmlFor="ad">Отметить как рекламу (ВКонтакте)</label></div>
                    </div>
                    <div className={styles.socPages}>
                        <div><h3>Социальные страницы</h3></div>
                        <div className={styles.refs}>
                            <a href="#">установить одно время</a>
                            <span>/</span>
                            <a href="#">сейчас</a>
                        </div>
                    </div>
                    <SocialAccounts recipients={this.recipients} disabled={this.disabled}/>
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