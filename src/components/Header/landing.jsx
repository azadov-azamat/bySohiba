import React from 'react'
import classes from "./header.module.scss"
import head from "../../assets/png/head/landing.png"
import {BsClock, BsPlay} from "react-icons/bs"
import {FiPhone} from "react-icons/fi"
import {BiChevronDown} from "react-icons/bi"
import {CgMouse} from "react-icons/cg"
import {IoLocationOutline} from "react-icons/io5"
import * as Button from "../Button"

export default function Landing() {

    return (
        <header className={classes.header}>
            <img src={head} alt="header-img" className={"w-full h-full absolute -z-10 object-cover object-center"}/>
            <div className={classes['head-top']}></div>
            <div className={classes['head-text']}>
                <h1>бренд, который восхитил многих <br className={"hidden lg:block"}/> мусульманских невест по всему
                    миру</h1>
                <Button.Ripple onClick={e => console.log("modal...")} outline={true} color={"outline"}>Получить
                    консультация</Button.Ripple>
                <div className={classes.play}>
                    <div>Посмотреть видео</div>
                    <BsPlay fontSize={25}/>
                </div>
                <a href={"tel:+998 97 101 88-80"}
                   className={"flex items-center gap-2 md:hidden text-primary_light hover:text-primary_yellow"}>
                    <FiPhone/>
                    <div className={"text-base"}>
                        +998 97 101 88-80
                    </div>
                </a>
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