import React, {useEffect, useState} from "react"
import * as Header from "../../components/Header"
import * as About from "../../components/AboutPage"
import * as Constant from "../../components/Constants"
import {useSelector} from "react-redux"
import AOS from "aos"
import Instagram from "../../components/Instagram";
import Comments from "../../components/Comments";

export default function Weddings() {

    const {catalog, videos} = useSelector(state => state.variables)

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
        });
    }, [])

    return (
        <>
            <Header.Wedding/>
            <About.Wedding/>
            <Constant.Catalog title={"каталог"} data={catalog}/>
            {
                width < 530 ? <Constant.SliderVideo title={"видеогалерея"} data={videos}/> :
                    <Constant.Video title={"видеогалерея"} data={videos}/>
            }
            <Instagram/>
            <Comments/>
        </>
    )
}