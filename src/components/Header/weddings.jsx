import React from 'react'
import classes from "./header.module.scss"
import head from "../../assets/png/head/weddings.png"
import {BsClock, BsPlay} from "react-icons/bs"
import {FiPhone} from "react-icons/fi"
import {BiChevronDown} from "react-icons/bi"
import {CgMouse} from "react-icons/cg"
import {IoLocationOutline} from "react-icons/io5"

export default function Weddings() {
    return (
        <header className={classes.header}>
            <img src={head} alt="header-img" className={"w-full h-full absolute -z-10 object-center"}/>
            <div className={classes['head-top']}></div>
            <div className={classes['head-text']}>
                <div className={classes['border-head']}>
                    <span className={classes.span}>
                        свадебные платья <span>BY sohiba</span> <br/>
выбор мусульманских невест
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