import React from 'react'
import classes from "./header.module.scss"
import head from "../../assets/png/head/beauty.png"
import {BsClock} from "react-icons/bs"
import {BiChevronDown} from "react-icons/bi"
import {CgMouse} from "react-icons/cg"
import {IoLocationOutline} from "react-icons/io5"
import {FiPhone} from "react-icons/fi";

export default function Beauty() {
    return (
        <header className={classes.header}>
            <img src={head} alt="header-img" className={"w-full h-full absolute -z-10 object-cover object-center"}/>
            <div className={classes['head-top']}></div>
            <div className={classes['head-text']}>
                <div className={classes['border-head']}>
                    <span className={classes.span}>
                        <span>  BYsohiba abayas boutique</span> <br/>
Модные дубайский абайи от нашего бренда
                    </span>
                </div>
                <a href={"tel:+998 97 101 88-80"} className={"flex items-center gap-2 md:hidden text-base text-primary_light hover:text-primary_yellow pt-12"}>
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
                <a href={"#about"} className={classes.mouse}>
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