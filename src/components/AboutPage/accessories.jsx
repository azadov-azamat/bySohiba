import React from "react"
import classes from "./about.module.scss"
import bg from "../../assets/png/bg/accessoriesBg.png"
import img from "../../assets/png/bg/accessories.png"

export default function Accessories() {
    return (
        <section className={classes['about-page-acc']} id={"about"}>
            <div className={classes.text}>
                <div className={classes.title}>
                    <div className={classes.h1}>
                        Дизайнерские украшения и аксессуары ручной работы в
                        <span className={classes.warn}> bysohiba</span>
                    </div>
                </div>
                <div className={classes.about}>
                    Все модели украшений производятся в единственном экземпляре, поэтому их обладательницы могут
                    гордиться, что носят действительно редкое и неповторимое ювелирное изделие.
                </div>
                <div className={classes.btn}>
                    <button>
                        Получить консультация
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