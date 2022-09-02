import React from "react"
import classes from "./about.module.scss"
import bg from "../../assets/png/bg/weddingBg.png"
import img from "../../assets/png/bg/wedding.png"
import logo from "../../assets/png/logo.png"
import * as Button from "../Button";

export default function Weddings() {
    return (
        <section className={classes['about-page']} id={"about"}>
            <div className={classes.text}>
                <div className={classes.title} data-aos="fade-up">
                    <div className={classes.h1}>
                       <div className="flex gap-2">
                           <span>Свадебные платья от бренда</span>
                           <img src={logo} alt=""/>
                       </div>
                    </div>
                    <div className={classes.span}></div>
                </div>
                <div className={classes.about}>
                    Уникальные свадебные платья, основанные на последних тенденциях исламского мира, которые максимально
                    скрывают тело невесты.
                    Скромность форм и красивые дизайнерские решения помогут вам стать самой красивой невестой вечера.
                </div>
                <div className={classes.btn}>
                    <Button.Ripple onClick={e => console.log(e)} color={"success"}>Получить консультация</Button.Ripple>
                </div>
            </div>
            <div className={classes.image}>
                <div className={classes.img}>
                    <img src={img} alt="page-img"/>
                </div>
                <div className={classes.bg}>
                    <img src={bg} alt="bg"/>
                </div>
            </div>
        </section>
    )
}