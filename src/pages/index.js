import React from "react"
import styles from "./index.module.css"
import { Link } from "gatsby"
import freeofcharge from "./freeofcharge.png"
import social from "./social.png"

export default () => (
<div>
    <div className={styles.wrapper}>
        <div className={styles.part1}>
            <header>
                <h1>SMM-PUBLISHER</h1>
                <Link to="/login/">Вход</Link>
            </header>
            <h2>Автопостинг в социальные сети</h2>
            <img src={social} alt=""/>
            <a href="">Попробывать бесплатно</a>
            <article>
                    <h3>
                        Автопостинг – это автоматическая публикация текста, фото
                        и видео материалов, по заранее запланированному расписанию.
                    </h3>
                    <ul>
                        <li>
                            Вы планируете любое количество публикаций на неограниченный
                            период времени. После этого сервис <b>SMM-PUBLISHER</b> публикует ваши
                            посты в автоматическом режиме в назначенное время.
                        </li>
                        <li>
                            Объединяйте аккаунты соцстей в проекты и настраивайте все
                            необходимые функции для оформления публикаций: геометки,
                            хештеги, опросы, стикеры и многое другое (более 20 настроек).
                        </li>
                    </ul>
            </article>
        </div>                        
    </div>
    <div className={styles.wrapper}>
        <div className={styles.part2}>
            <h2>Автопостинг фото и видео</h2>
            <p>
                Публикуйте фотографии и видео по заранее спланированному графику.
                Укажите дату и время, и сервис SMM-PUBLISHER автоматически опубликует ваш пост.
            </p>
            <a href="">Попробывать бесплатно</a>
        </div>
    </div>
    <div className={styles.wrapper}>
        <div className={styles.part3}>
            <h2>Проекты, расписание</h2>
            <p>
                    Объединяйте аккаунты соцсетей в проекты и используйте расписание для удобного постинга.
            </p>
            <a href="">Попробывать бесплатно</a>
            <h2>Абсолютно бесплатно!!</h2>
            <img src={freeofcharge} alt=""/>
            <p>Вы не за что не платите, это не коммерческий проект. Мы не стремимся нажиться на пользователях.</p>
            <p>Если хотите помочь развитию проекта, то сделайте это через добровольный донат.</p>
            <a href="">Попробывать бесплатно</a>
            <h2>Сотни тысяч уже работают вместе с нами</h2>
            <div className={styles.gallery}>
                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt=""/>
                <img src="https://randomuser.me/api/portraits/men/2.jpg" alt=""/>
                <img src="https://randomuser.me/api/portraits/men/3.jpg" alt=""/>
                <img src="https://randomuser.me/api/portraits/men/4.jpg" alt=""/>
                <img src="https://randomuser.me/api/portraits/men/5.jpg" alt=""/>
                <img src="https://randomuser.me/api/portraits/men/6.jpg" alt=""/>
                <img src="https://randomuser.me/api/portraits/men/7.jpg" alt=""/>
                <img src="https://randomuser.me/api/portraits/men/8.jpg" alt=""/>
                <img src="https://randomuser.me/api/portraits/men/9.jpg" alt=""/>
                <img src="https://randomuser.me/api/portraits/men/10.jpg" alt=""/>
                <img src="https://randomuser.me/api/portraits/men/11.jpg" alt=""/>
                <img src="https://randomuser.me/api/portraits/men/12.jpg" alt=""/>
                <img src="https://randomuser.me/api/portraits/men/13.jpg" alt=""/>
                <img src="https://randomuser.me/api/portraits/men/14.jpg" alt=""/>
                <img src="https://randomuser.me/api/portraits/men/15.jpg" alt=""/>
                <img src="https://randomuser.me/api/portraits/men/16.jpg" alt=""/>
                <img src="https://randomuser.me/api/portraits/men/17.jpg" alt=""/>
                <img src="https://randomuser.me/api/portraits/men/18.jpg" alt=""/>
            </div>
            <p>Вступай в сообщество сммщиков, знающих цену времени</p>
            <a href="">Попробывать бесплатно</a>
        </div>
    </div>
    <footer>
        <h3>m31k0l2@gmail.com (2018)</h3>
    </footer>
</div>)
