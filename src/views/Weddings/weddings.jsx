import React, {useEffect, useState} from "react"
import * as Header from "../../components/Header"
import * as About from "../../components/AboutPage"
import * as Constant from "../../components/Constants"
import {useDispatch, useSelector} from "react-redux"
import AOS from "aos"
import Instagram from "../../components/Instagram"
import Comments from "../../components/Comments"
import * as inst from "../../redux/reducers/Variables"
import {INSTAGRAM_TOKEN} from "../../utils/constants"

export default function Weddings() {

    const dispatch = useDispatch()

    const {catalog} = useSelector(state => state.variables)
    const {instaVideos, isLoading} = useSelector(state => state.variables)

    useEffect(() => {
        if (instaVideos?.length === 0)
            dispatch(inst.getInstagramVideosList(INSTAGRAM_TOKEN))
    }, [])

    const [width, setWidth] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])

    const listenToScroll = () => {
        const winScroll = window.innerWidth
        setWidth(winScroll)
    }

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])

    return (
        <>
            <Header.Wedding/>
            <About.Wedding/>
            <Constant.Catalog title={"каталог"} data={catalog}/>
            {
                width < 530 ? <Constant.SliderVideo title={"видеогалерея"} data={instaVideos}/> :
                    <Constant.Video title={"видеогалерея"} data={instaVideos}/>
            }
            <Instagram/>
            <Comments/>
        </>
    )
}