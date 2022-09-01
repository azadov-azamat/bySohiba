import React from "react"
import classes from "./footer.module.scss"
import logo from "../../assets/png/logo.png"
import {useSelector} from "react-redux"
import Title from "../Constants/title"

export default function Footer(){

    const {social} = useSelector(state => state.variables)

    return(
        <footer className={classes.footer}>
            <Title text={"наш адрес"}/>
            <div className={classes.data}>
               <div className={classes['footer-top']}>
                   <div className={classes.tex1}>
                       <div className={classes.nav}>
                           <span>Салон Чорсу</span>
                       </div>
                       <div className={classes.data}>
                           <div className={classes.text}>
                               <span className={classes.p}>Адрес</span>
                               <span>Ташкент, улица Лайлитог 97</span>
                               <span>Ориентр реторан Мумтоз</span>
                           </div>
                           <div className={classes.text}>
                               <span className={classes.p}>Время работы</span>
                               <span>Без выходных 10:00 - 19:00</span>
                           </div>
                           <div className={classes.text}>
                               <span className={classes.p}>Номер телефона</span>
                               <span><a href="tel:+998 97 101 88-80">+998 97 101 88-80</a></span>
                           </div>
                       </div>
                       <div className={classes.social}>
                           <ul>
                               {social.map((item, index) => <li key={index.toString()}><a href={item.link}
                                                                                          target={"_blank"}>{item.name}</a></li>)}
                           </ul>
                       </div>
                   </div>
                   <div className={classes.data}>
                       <div className={classes.location}>
                           <a className={classes.name} href="https://yandex.uz/maps/org/9860048136/?utm_medium=mapframe&utm_source=maps">By Sohiba weddings</a>
                           <a className={classes.title} href="https://yandex.uz/maps/10335/tashkent/category/bridal_salon/184108335/?utm_medium=mapframe&utm_source=maps">
                               Bridal Salon in Tashkent
                           </a>
                           <iframe src="https://yandex.uz/map-widget/v1/-/CCUVUIgJ8C" frameBorder="1"
                                   allowFullScreen="true"></iframe>
                       </div>
                   </div>
                   <div className={classes.tex2}>
                        <div className={classes.nav}>
                            <span>Салон Чорсу</span>
                        </div>
                       <div className={classes.data}>
                           <div className={classes.text}>
                               <span className={classes.p}>Адрес</span>
                               <span>Ташкент, улица Лайлитог 97</span>
                               <span>Ориентр реторан Мумтоз</span>
                           </div>
                           <div className={classes.text}>
                               <span className={classes.p}>Время работы</span>
                               <span>Без выходных 10:00 - 19:00</span>
                           </div>
                           <div className={classes.text}>
                               <span className={classes.p}>Номер телефона</span>
                               <span><a href="tel:+998 97 101 88-80">+998 97 101 88-80</a></span>
                           </div>
                       </div>
                       <div className={classes.social}>
                           <ul>
                               {social.map((item, index) => <li key={index.toString()}><a href={item.link}
                                                                                          target={"_blank"}>{item.name}</a></li>)}
                           </ul>
                       </div>
                   </div>
               </div>
                <div className={classes['footer-bottom']}>
                    <div className={classes['data-bottom']}>
                        <div className={classes.img1}>
                            <img src={logo} alt=""/>
                        </div>
                        <div className={classes.span}>“bySohiba” {new Date().getFullYear()}. Все права защищены.</div>
                        <div className={classes.img2}>
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}