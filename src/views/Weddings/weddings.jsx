import React, {useEffect} from "react"
import * as Header from "../../components/Header"
import * as About from "../../components/AboutPage"
import * as Constant from "../../components/Constants"
import {useSelector} from "react-redux"
import AOS from "aos"

export default function Weddings() {

    const {catalog, videos} = useSelector(state => state.variables)

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
            <Constant.Video title={"видеогалерея"} data={videos}/>
        </>
    )
}