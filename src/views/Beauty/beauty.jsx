import React, {useEffect} from "react"
import * as Header from "../../components/Header"
import * as About from "../../components/AboutPage"
import * as Constant from "../../components/Constants"
import Photos from "../../components/PhotoGallery"

import {useSelector} from "react-redux"
import AOS from "aos"

export default function Beauty() {

    const {videos} = useSelector(state => state.variables)

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <>
            <Header.Beauty/>
            <About.Beauty/>
            <Constant.SliderVideo title={"работа наших визажистов"} data={videos}/>
            <Photos/>
        </>
    )
}