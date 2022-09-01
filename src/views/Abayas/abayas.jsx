import React from "react"
import * as Header from "../../components/Header"
import * as About from "../../components/AboutPage"
import * as Constant from "../../components/Constants"
import Photos from "../../components/PhotoGallery"

import {useSelector} from "react-redux"

export default function Abayas() {

    const {catalog, videos} = useSelector(state => state.variables)

    return (
        <>
            <Header.abayas/>
            <About.abayas/>
            <Photos/>
            <Constant.catalog title={"Abaya платья"} data={catalog}/>
            <Constant.slider title={"Обувь"}/>
            <Constant.slider title={"аксессуары"}/>
            <Constant.video title={"Видеоблог"} data={videos}/>
        </>
    )
}