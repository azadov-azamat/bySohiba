import React, {useEffect, useState} from "react"
import classes from "./instagram.module.scss"
import {Col, Row} from "antd"
import instagramIco from "../../assets/png/instagram.png"
import logo from "../../assets/png/logo@.png"

import {useSelector} from "react-redux";
import {BsArrowRightShort} from "react-icons/bs"

export default function Instagram(){

    const {instagram} = useSelector(state => state.variables)

    const [width, setWidth] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])

    const listenToScroll = () => {
        const winScroll = window.innerWidth
        setWidth(winScroll)
    }

    return(
        <div className={classes.wrapper}>
            <div className={classes.title}>
                <img src={instagramIco} alt="instagram-ico"/>
                <p>Подпишитесь на наш инстаграм, чтобы быть в курсе о новых коллекций и скидок</p>
            </div>
            <Row className={classes.row}>
                {
                    instagram.slice(0, width < 805 ? 4 : 5).map(item=> <Col>
                        <img src={item.img} alt="img"/></Col>)
                }
            </Row>
            <div className={classes.bottom}>
                <a href={"https://www.instagram.com/bysohiba_dev/"} target={"_blank"}>
                    Перейти в Instagram
                    <BsArrowRightShort/>
                </a>
                <img src={logo} alt="logo" className={classes.logo} width={240}/>
            </div>
        </div>
    )
}