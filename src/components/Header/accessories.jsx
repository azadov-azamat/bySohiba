import React from 'react'
import classes from "./header.module.scss"
import head from "../../assets/png/head/beauty.png"
import {BsClock} from "react-icons/bs"
import {BiChevronDown} from "react-icons/bi"
import {CgMouse} from "react-icons/cg"
import {IoLocationOutline} from "react-icons/io5"

export default function Accessories() {
    return (
        <header className={classes.header}>
            <img src={head} alt="header-img" className={"w-full h-full absolute -z-10 object-center"}/>
            <div className={classes['head-top']}></div>
            <div className={classes['head-text']}>
                <div className={classes['border-head']}>
                    <span className={classes.span}>
                        <span>  BYsohiba abayas boutique</span> <br/>
Модные дубайский абайи от нашего бренда
                    </span>
                </div>
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