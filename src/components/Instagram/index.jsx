import React, {useEffect, useState} from "react"
import classes from "./instagram.module.scss"
import {Col, Row} from "antd"
import instagramIco from "../../assets/png/instagram.png"
import logo from "../../assets/png/logo@.png"

import {useDispatch, useSelector} from "react-redux"
import {BsArrowRightShort} from "react-icons/bs"
import * as Button from "../Button"
import {getInstagramPhotosData, getInstagramPhotosList} from "../../redux/reducers/Variables"

export default function Instagram() {

    const dispatch = useDispatch()
    const {instaPhotosId, instaPhotoData} = useSelector(state => state.variables)

    const access_token = 'IGQVJXV09sa3luYl84aEQzWkdpbDhlM3JUeG1RN0dkbWJyWnNVR0k0VWdsQ25qelpqTURhOVhtdk1xbUFoSWlSMnpuMTg4N1pEbWl3ZAlNRSVBMX0dqTUJWRXV4SmFENTZAwRTJhM1laUF9OY0t3cU1MZAAZDZD'

    const [width, setWidth] = useState(0)

    useEffect(() => {
        dispatch(getInstagramPhotosList(access_token))
    }, [])

    useEffect(() => {
        if (instaPhotosId?.length !== 0) {
            for (let instaPhotosIdKey of instaPhotosId) {
                   dispatch(getInstagramPhotosData({token: access_token, photoId: instaPhotosIdKey?.id}))
            }
        }
    }, [instaPhotosId])

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
                    instaPhotosId.slice(0, width < 805 ? 4 : 5).map(item => <Col key={instaPhotoData[item?.id]?.id}>
                        {
                            instaPhotoData[item?.id]?.media_type === "IMAGE" && <img src={instaPhotoData[item?.id]?.media_url} alt="instagram-image"/>
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