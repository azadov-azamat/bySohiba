import React, {useEffect, useState} from "react"
import classes from "./photos.module.scss"
import {useSelector} from "react-redux"
import {Col, Row} from "antd"
import Title from "../Constants/title"

export default function Photos() {

    const {photosAbaya} = useSelector(state => state.variables)

    const [width, setWidth] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])

    const listenToScroll = () => {
        const winScroll = window.innerWidth
        setWidth(winScroll)
    }


    return (
        <section className={classes['photo-gallery']} id={"photo-gallery"}>
            <Title text={"Фотогалерея"}/>
            <Row className={classes.row}>
                {
                    photosAbaya.slice(0, width < 575 ? 3 : 4).map((item, index) => <Col span={index === 0 ? 24 : 11}
                                                                                        sm={index === 0 ? 24 : 7}
                                                                                        key={item.id}
                                                                                        className={classes.col}>
                        <img src={item.img} alt="photo-gallery"/>
                    </Col>)
                }
            </Row>
        </section>
    )
}