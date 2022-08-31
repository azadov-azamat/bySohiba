import React from "react"
import classes from "./about.module.scss"
import bg from "../../assets/png/bg/abayasBg.png"
import img from "../../assets/png/bg/abayas.png"
import logo from "../../assets/png/logo.png"

export default function Abayas() {
    return (
        <section className={classes['about-page']} id={"about"}>
            <div className={classes.text}>
                <div className={classes.title}>
                    <div className={classes.h1}>
                        <span className={classes.warn}>Bysohiba abayas boutique</span>
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
                <div className={classes.btn}>
                    <button>
                        Бесплатная консультация
                    </button>
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