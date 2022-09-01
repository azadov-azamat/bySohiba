import React from "react"
import classes from "./photos.module.scss"
import {useSelector} from "react-redux"
import {Col, Row} from "antd"
import Title from "../Constants/title"

export default function Photos() {

    const {photosAbaya} = useSelector(state => state.variables)

    return (
        <section className={classes['photo-gallery']} id={"photo-gallery"}>
            <Title text={"Фотогалерея"}/>
            <Row className={classes.row}>
                {
                    photosAbaya.map((item, index) => <Col span={index === 0 ? 24 : 7} key={item.id} className={classes.col}>
                        <img src={item.img} alt="photo-gallery"/>
                    </Col>)
                }
            </Row>
        </section>
    )
}