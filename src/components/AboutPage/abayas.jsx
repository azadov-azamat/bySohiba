import React, {useEffect, useRef, useState} from "react"
import classes from "./about.module.scss"
import bg from "../../assets/png/bg/abayasBg.png"
import img from "../../assets/png/bg/abayas.png"
import * as Button from "../Button"

export default function Abayas() {

    return (
        <section className={classes['about-page']} id={"about"}>
            <div className={classes.text}>
                <div className={classes.title}>
                    <div className={classes.h1}>
                        <span className={classes.warn}>Bysohiba abayas boutique</span> <br/>
                        Работа началась в Ташкенте
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
                <div className={classes.about}>
                    <ul>
                        <li>Бесплатная консультация</li>
                        <li>Платки</li>
                        <li>Обувь</li>
                        <li>Фирменные сумки от бренда bySohiba в современном стиле</li>
                    </ul>
                </div>
                <div>
                    <Button.Ripple onClick={e => console.log(e)} color={"success"}> Бесплатная
                        консультация</Button.Ripple>
                </div>
            </div>
            <div className={classes.image}>
                <div className={classes.img}>
                    <img src={img} alt="page-img"/>
                </div>
                <div className={classes.bg} id={"img-position"}>
                    <img src={bg} alt="bg"/>
                </div>
            </div>
        </section>
    )
}