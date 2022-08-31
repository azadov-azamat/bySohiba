import React, {useEffect, useState} from "react"
import classes from "./catalog.module.scss"
import Title from "../Title"
import {useSelector} from "react-redux"
import {Col, Row} from "antd"
import ImagePreview from "../ImagePreview"

export default function Catalog() {

    const {catalog} = useSelector(state => state.variables)

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
            <Title text={"каталог"}/>
            <Row className={classes.row}>
                {
                    catalog.map(item => <Col key={item.id} onClick={() => imagePreview(item.id)}
                                             className={'relative overflow-hidden cursor-pointer'}>
                        <img src={item.img} alt="img"/>
                        {
                            item.type !== "OLD" && <>
                                <div className={classes.status}>{status(item.type)}</div>
                            </>
                        }
                    </Col>)
                }
            </Row>
            {isOpen && <ImagePreview setOpen={setIsOpen} data={catalog} dataId={currentImg}/>}
            <div className={classes.btn}>
                <button>Показать еще <span></span></button>
            </div>
        </section>
    )
}