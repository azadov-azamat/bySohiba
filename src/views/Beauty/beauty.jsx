import React from "react"
import * as Header from "../../components/Header"
import * as About from "../../components/AboutPage"
import * as Constant from "../../components/Constants"
import Photos from "../../components/PhotoGallery"

import {useSelector} from "react-redux"

export default function Beauty() {

    const {catalog, videos} = useSelector(state => state.variables)

    return (
        <>
            <Header.beauty/>
            <About.beauty/>
            <Constant.sliderVideo title={"работа наших визажистов"} data={videos}/>
            <Photos/>
        </>
    )
}