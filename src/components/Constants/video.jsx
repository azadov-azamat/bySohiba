import React from "react"
import classes from "./scss/video.module.scss"
import {Col, Row} from "antd"
import Title from "./title"

export default function Video({title, data}) {

    return (
        <section className={classes['video-gallery']} id={"video-gallery"}>
            <Title text={title}/>
            <Row className={classes.row}>
                {
                    data.map(item => <Col key={item.id} className={"2xl:w-56 xl:w-52 lg:w-48 md:w-44 sm:w-40 w-44 h-auto"}>
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