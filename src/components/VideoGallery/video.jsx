import React from "react"
import classes from "./video.module.scss"
import Title from "../Title"
import {useSelector} from "react-redux"
import {Col, Row} from "antd"

export default function Video() {

    const {videos} = useSelector(state => state.variables)

    return (
        <section className={classes['video-gallery']} id={"video-gallery"}>
            <Title text={"видеогалерея"}/>
            <Row className={classes.row}>
                {
                    videos.map(item => <Col key={item.id} className={"2xl:w-56 xl:w-52 lg:w-48 md:w-44 sm:w-40 w-36 h-auto"}>
                        <video controls>
                            <source src={item.src} type="video/mp4"/>
                            Your browser does not support HTML video.
                        </video>
                    </Col>)
                }
            </Row>
        </section>
    )
}