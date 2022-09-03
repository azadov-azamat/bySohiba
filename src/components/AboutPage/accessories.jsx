import React from "react"
import classes from "./about.module.scss"
import bg from "../../assets/png/bg/accessoriesBg.png"
import img from "../../assets/png/bg/accessories.png"

import * as Button from "../Button"

export default function Accessories() {
    return (
        <section className={classes['about-page-acc']} id={"about"}>
            {/*<div className="absolute -z-10 w-1/3">*/}
            {/*    <svg className={"w-full"} height="400" viewBox="0 0 864 894" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
            {/*        <g filter="url(#filter0_f_741_1144)">*/}
            {/*            <path*/}
            {/*                d="M623.33 184.874C718.813 280.357 706.022 510.009 574.806 641.225C443.59 772.441 209.963 708.424 114.479 612.94C18.9963 517.457 703.676 421.001 495.008 345.238C338.471 288.403 585.233 146.777 623.33 184.874Z"*/}
            {/*                fill="#D4E2D5" fill-opacity="0.7"/>*/}
            {/*        </g>*/}
            {/*        <defs>*/}
            {/*            <filter id="filter0_f_741_1144" x="-72.7122" y="0.457031" className={"w-full h-full"}*/}
            {/*                    filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">*/}
            {/*                <feFlood flood-opacity="0" result="BackgroundImageFix"/>*/}
            {/*                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>*/}
            {/*                <feGaussianBlur stdDeviation="89" result="effect1_foregroundBlur_741_1144"/>*/}
            {/*            </filter>*/}
            {/*        </defs>*/}
            {/*    </svg>*/}

            {/*</div>*/}
            <div className={classes.text}>
                <div className={classes.title}>
                    <div className={classes.h1}>
                        Дизайнерские украшения и аксессуары ручной работы в
                        <span className={classes.warn}> bysohiba</span>
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
                    Все модели украшений производятся в единственном экземпляре, поэтому их обладательницы могут
                    гордиться, что носят действительно редкое и неповторимое ювелирное изделие.
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