import React, {useEffect, useState} from "react"
import classes from "./instagram.module.scss"
import {Col, Row} from "antd"
import instagramIco from "../../assets/png/instagram.png"
import logo from "../../assets/png/logo@.png"

import {useDispatch, useSelector} from "react-redux"
import {BsArrowRightShort} from "react-icons/bs"
import * as Button from "../Button"
import Spinner from "../Animation/refresh"
import * as inst from "../../redux/reducers/Variables"
import {INSTAGRAM_TOKEN} from "../../utils/constants"

export default function Instagram() {

    const dispatch = useDispatch()
    const {instaImages, isLoading} = useSelector(state => state.variables)

    const [width, setWidth] = useState(0)

    useEffect(() => {
        if (instaImages?.length === 0)
            dispatch(inst.getInstagramImageList(INSTAGRAM_TOKEN))
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])

    const listenToScroll = () => {
        const winScroll = window.innerWidth
        setWidth(winScroll)
    }

    return (
        <div className={classes.wrapper}>
            <div className={classes.title} data-aos="fade-up">
                <img src={instagramIco} alt="instagram-ico"/>
                <p>Подпишитесь на наш инстаграм, чтобы быть в курсе о новых коллекций и скидок</p>
            </div>
            <Row className={classes.row}>
                {
                    isLoading ? <Spinner loading={isLoading}/> : instaImages.slice(0, width < 805 ? 4 : 5).map(item =>
                        <Col key={item?.id}>
                            {
                                <img src={item?.media_url} alt="instagram-image"/>
                            }
                        </Col>)
                }
            </Row>
            <div className={classes.bottom}>
                <Button.Ripple onClick={e => window.location.replace("https://www.instagram.com/bysohiba_dev")}
                               color={"success"}>
                    Перейти в Instagram
                    <BsArrowRightShort/>
                </Button.Ripple>
                <img src={logo} alt="logo" className={classes.logo} width={240}/>
            </div>
        </div>
    )
}