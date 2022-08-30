import React from 'react'
import classes from "./header.module.scss"
import head from "../../assets/png/head.png"
import play from "../../assets/ico/play.png"
import location from "../../assets/ico/location.png"
import downUp from "../../assets/ico/downUp.svg"
import clock from "../../assets/ico/clock.png"
import phone from "../../assets/ico/phone.png";

export default function Header() {
    return (
        <header className={classes.header}>
            <img src={head} alt="header-img" className={"w-full h-full absolute -z-10 object-center"}/>
            <div className={classes['head-top']}></div>
            <div className={classes['head-text']}>
                <h1>бренд, который восхитил многих <br className={"hidden lg:block"}/> мусульманских невест по всему миру</h1>
                <button>
                    Получить консультацию
                    <span></span>
                </button>
                <div className={classes.play}>
                    <p>Посмотреть видео</p>
                    <img src={play} alt="play-ico"/>
                </div>
                <div className={"flex items-center gap-2 md:hidden"}>
                    <img src={phone} alt="ico-phone" className={"w-4"}/>
                   <p className={"text-base"}>
                       +998 97 101 88-80
                   </p>
                </div>
            </div>
            <div className={classes['head-bottom']}>
                <p>
                    <img src={location} alt="location-ico"/>
                    Ташкент, улица Мирза Голиб 1
                </p>
                <div className={classes.mouse}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="16" height="16"
                         fill="currentColor" className="bi bi-mouse mouse-icon"
                         viewBox="0 0 16 16">
                        <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1
                  0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1
                  1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5
                  0 0 0-5-5z"/>
                    </svg>

                    <img src={downUp} className="chevron-icon" alt="" />

                </div>
                <p>
                    <img src={clock} alt="clock-ico"/>
                    Без выходных 10:00 - 19:00
                </p>
            </div>
        </header>
    )
}