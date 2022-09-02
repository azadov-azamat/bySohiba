import React, {useEffect} from "react"
import * as About from "../../components/AboutPage"
import * as Constant from "../../components/Constants"

import {useSelector} from "react-redux"
import AOS from "aos"

export default function Accessories() {

    const {videos} = useSelector(state => state.variables)

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <>
            <About.Accessories/>
            <Constant.SliderPhoto title={"примеры наших работ"}/>
            <Constant.SliderVideo title={"видеоблог"} data={videos}/>
        </>
    )
}