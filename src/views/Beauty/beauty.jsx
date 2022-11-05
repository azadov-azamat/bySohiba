import React, {useEffect} from "react"
import * as Header from "../../components/Header"
import * as About from "../../components/AboutPage"
import * as Constant from "../../components/Constants"
import Photos from "../../components/PhotoGallery"

import {useSelector} from "react-redux"
import AOS from "aos"
import bgEffect from "../../assets/png/bg-effect/BGefferct (Beauty salon).png"
import Instagram from "../../components/Instagram"
import Comments from "../../components/Comments"

export default function Beauty() {

    const {videos} = useSelector(state => state.variables)

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])

    return (
        <>
            <Header.Beauty/>
            <div className="relative w-full h-auto">
                <img src={bgEffect} alt="" className={"absolute w-full h-full top-0"}/>
                <About.Beauty/>
                <Constant.SliderVideo title={"работа наших визажистов"} data={videos}/>
                <Photos/>
                <Instagram/>
                <Comments/>
            </div>
        </>
    )
}