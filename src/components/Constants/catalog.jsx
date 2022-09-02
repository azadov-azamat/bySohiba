import React, {useEffect, useState} from "react"
import classes from "./scss/catalog.module.scss"
import {Col, Row} from "antd"
import ImagePreview from "../ImagePreview"
import Title from "./title"
import Image from "../Image"

import * as Button from "../Button"

export default function Catalog({title, data}) {

    const [isOpen, setIsOpen] = useState(false);
    const [currentImg, setCurrentImg] = useState(1);

    const [width, setWidth] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])

    const listenToScroll = () => {
        const winScroll = window.innerWidth
        setWidth(winScroll)
    }

    function imagePreview(id) {
        setCurrentImg(id - 1)
        setTimeout(() => {
            setIsOpen(true);
        }, 500);
    }

    return (
        <section className={classes.catalog} id={"catalog"}>
            <Title text={title}/>
            <Row className={classes.row}>
                {
                    data.slice(0, width < 530 ? 6 : 10).map(item =>
                        <Col key={item.id}
                             span={11}
                             sm={7}
                             lg={5}
                             xl={4}
                             onClick={() => imagePreview(item.id)}
                             className={classes.col}>
                        <Image item={item}/>
                    </Col>)
                }
            </Row>
            {isOpen && <ImagePreview setOpen={setIsOpen} data={data} dataId={currentImg}/>}
            <div className={"pt-12 flex justify-center"}>
                <Button.Ripple onClick={e => console.log(e)} outline={true} color={"outline-border"}>Показать еще</Button.Ripple>
            </div>
        </section>
    )
}