import React, {useEffect, useState} from "react"
import classes from "./catalog.module.scss"
import Title from "../Title"
import {useSelector} from "react-redux"
import {Col, Row} from "antd"

export default function Catalog() {

    const {catalog} = useSelector(state => state.variables)

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

    return (
        <section className={classes.catalog} id={"catalog"}>
            <Title text={"каталог"}/>
            <Row className={classes.row}>
                {
                    catalog.map(item => <Col className={'relative overflow-hidden'}>
                        <img src={item.img} alt="img"/>
                        {
                            item.type !== "OLD" && <>
                                <div className={classes.status}>{status(item.type)}</div>
                            </>
                        }
                    </Col>)
                }
            </Row>
            <div className={classes.btn}>
                <button>Показать еще <span></span></button>
            </div>
        </section>
    )
}