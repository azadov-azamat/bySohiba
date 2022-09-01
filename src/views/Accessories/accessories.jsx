import React from "react"
import * as About from "../../components/AboutPage"
import * as Constant from "../../components/Constants"

import {useSelector} from "react-redux"

export default function Accessories() {

    const {catalog, videos} = useSelector(state => state.variables)

    return (
        <>
            <About.accessories/>
            <Constant.sliderPhoto title={"примеры наших работ"}/>
            <Constant.sliderVideo title={"видеоблог"} data={videos}/>
        </>
    )
}