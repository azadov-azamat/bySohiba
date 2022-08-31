import React from 'react'
import classes from "./header.module.scss"
import head from "../../assets/png/head.png"
import {BsClock, BsPlay} from "react-icons/bs"
import {GrLocation} from "react-icons/gr"
import {FiPhone} from "react-icons/fi"
import {BiChevronDown} from "react-icons/bi"
import {CgMouse} from "react-icons/cg"
import {IoLocationOutline} from "react-icons/io5";

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
                    <div>Посмотреть видео</div>
                    <BsPlay fontSize={25}/>
                </div>
                <div className={"flex items-center gap-2 md:hidden"}>
                    <FiPhone/>
                   <text className={"text-base"}>
                       +998 97 101 88-80
                   </text>
                </div>
            </div>
            <div className={classes['head-bottom']}>
                <p>
                    <IoLocationOutline/>
                    Ташкент, улица Мирза Голиб 1
                </p>
                <a href={"#brands"} className={classes.mouse}>
                    <CgMouse/>
                    <BiChevronDown className={classes.img}/>
                </a>
                <p>
                    <BsClock/>
                    Без выходных 10:00 - 19:00
                </p>
            </div>
        </header>
    )
}