import React, {useEffect} from 'react'
import AOS from "aos"
import Brands from "../../components/Brands"
import Instagram from "../../components/Instagram"
import Comments from "../../components/Comments"
import * as Header from "../../components/Header"

export default function Home() {

    // useEffect(() => {
    //     AOS.init({
    //         duration: 1000
    //     });
    // }, [])

    return (
        <>
            <Header.landing/>
            <Brands/>
            <Instagram/>
            <Comments/>
        </>
    )
}