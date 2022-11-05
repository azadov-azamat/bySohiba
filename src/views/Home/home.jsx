import React, {useEffect} from 'react'
import AOS from "aos"
import Brands from "../../components/Brands"
import * as Header from "../../components/Header"
import bgEffect from "../../assets/png/bg-effect/background effect(Bridal dress).png"
import Instagram from "../../components/Instagram"
import Comments from "../../components/Comments"

export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])

    return (
        <>
            <Header.Landing/>
            <div className="relative w-full h-auto">
                <img src={bgEffect} alt="" className={"absolute w-full h-full top-0 -z-50"}/>
                <Brands/>
                <Instagram/>
                <Comments/>
            </div>
        </>
    )
}