import React from 'react'
import classes from "./brands.module.scss"
import CardBrand from "./Card"
import {useSelector} from "react-redux"
import {Row} from "antd";

export default function Brands() {

    const {service} = useSelector(state => state.variables)

    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                <p id={"brands"}><span><p>by</p>sohiba </span>&nbsp; предлагает вам <br className={"block sm:hidden"}/> следующие Бренды</p>
            </div>
            <Row className={"pb-16 gap-5 justify-center"}>
                {
                    service.map(item=> <CardBrand key={item.id} img={item.img} title={item.title} text={item.text}/>)
                }
            </Row>
        </div>
    )
}