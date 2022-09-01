import React from "react"
import classes from "./about.module.scss"
import bg from "../../assets/png/bg/beautyBg.png"
import img from "../../assets/png/bg/beauty.png"

export default function Beauty() {
    return (
        <section className={classes['about-page']} id={"about"}>
            <div className={classes.image}>
                <div className={classes.img}>
                    <img src={img} alt="page-img"/>
                </div>
                <div className={classes.bg}>
                    <img src={bg} alt="bg"/>
                </div>
            </div>
            <div className={classes.text + " md:hidden"}>
                <div className={classes.title}>
                    <div className={classes.h1}>
                        почему <span className={classes.warn}> Bysohiba beauty salon</span>
                    </div>
                </div>
                <div className={classes.about}>
                    Особый вид макияжа - это свадебный макияж. Мы знаем, как важно для вас это событие и подходим к созданию свадебного образа со всей ответственностью и старанием.
                    По желанию клиентки может проводиться пробный макияж, который поможет определиться с окончательным образом.
                </div>
                <div className={classes.btn}>
                    <button>
                        Получить консультация
                    </button>
                </div>
            </div>
        </section>
    )
}