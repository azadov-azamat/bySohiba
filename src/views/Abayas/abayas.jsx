import React, {useEffect} from "react"
import * as Header from "../../components/Header"
import * as About from "../../components/AboutPage"
import * as Constant from "../../components/Constants"
import Photos from "../../components/PhotoGallery"

import {useSelector} from "react-redux"
import AOS from "aos"

export default function Abayas() {

    const {catalog, videos} = useSelector(state => state.variables)

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <>
            <Header.Abayas/>
            <About.Abayas/>
            <Photos/>
            <Constant.Catalog title={"Abaya платья"} data={catalog}/>
            <Constant.SliderPhoto title={"Обувь"}/>
            <Constant.SliderPhoto title={"аксессуары"}/>
            <Constant.SliderVideo title={"Видеоблог"} data={videos}/>
        </>
    )
}