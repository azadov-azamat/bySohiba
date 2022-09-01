import React, {useEffect, useState} from "react"
import classes from "./scss/catalog.module.scss"
import {Col, Row} from "antd"
import ImagePreview from "../ImagePreview"
import Title from "./title";
import Image from "../Image";

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

    function status(status) {
        switch (status) {
            case "NEW":
                return (
                    <span className={classes.new}>Новинка</span>
                )
            default:
            case "HAND":
                return (
                    <span className={classes.hand}>ручная работа</span>
                )
        }
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
                    data.map(item => <Col key={item.id} onClick={() => imagePreview(item.id)}
                                          className={'relative overflow-hidden cursor-pointer'}>
                        <Image item={item}/>
                    </Col>)
                }
            </Row>
            {isOpen && <ImagePreview setOpen={setIsOpen} data={data} dataId={currentImg}/>}
            <div className={classes.btn}>
                <button>Показать еще <span></span></button>
            </div>
        </section>
    )
}