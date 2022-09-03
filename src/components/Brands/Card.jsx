import React from 'react'
import classes from "./brands.module.scss"
import {Col} from "antd"
import logo from "../../assets/png/logo.png"

export default function CardBrand({img, text, title}){
    return(
        <Col span={24} md={11} className={classes.card}>
            <img src={img} alt="card-img" className={classes.img}/>
            <div className={classes['card-text']}>
                <div className="flex flex-col items-center">
                    <img src={logo} alt=""/>
                    <p>{title}</p>
                </div>
                <p>{text}</p>
            </div>
        </Col>
    )
}