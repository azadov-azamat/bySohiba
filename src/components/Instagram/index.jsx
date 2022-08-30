import React from "react"
import classes from "./instagram.module.scss"
import {Col, Row} from "antd"
import CardBrand from "../Brands/Card"
import instagramIco from "../../assets/png/instagram.png"
import right from "../../assets/ico/downRight.png"

import {useSelector} from "react-redux";

export default function Instagram(){

    const {instagram} = useSelector(state => state.variables)
    return(
        <div className={classes.wrapper}>
            <div className={classes.title}>
                <img src={instagramIco} alt="instagram-ico"/>
                <p>Подпишитесь на наш инстаграм, чтобы быть в курсе о новых коллекций и скидок</p>
            </div>
            <Row className={classes.row}>
                {
                    instagram.map(item=> <Col><img src={item.img} alt="img"/></Col>)
                }
            </Row>
            <div className={classes.bottom}>
                <button className={"flex items-center py-3 px-5 bg-primary_black rounded gap-3 text-primary_light"}>
                    Перейти в Instagram
                    <img src={right} alt="" width={15}/>
                </button>
            </div>
        </div>
    )
}