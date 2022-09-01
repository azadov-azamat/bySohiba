import React from "react"
import * as Header from "../../components/Header"
import * as About from "../../components/AboutPage"
import * as Constant from "../../components/Constants"
import {useSelector} from "react-redux"

export default function Weddings() {

    const {catalog, videos} = useSelector(state => state.variables)

    return (
        <>
            <Header.wedding/>
            <About.wedding/>
            <Constant.catalog title={"каталог"} data={catalog}/>
            <Constant.video title={"видеогалерея"} data={videos}/>
        </>
    )
}