import React, {useEffect} from 'react'
import AOS from "aos"
import Brands from "../../components/Brands"
import * as Header from "../../components/Header"

export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <>
            <Header.Landing/>
            <Brands/>
        </>
    )
}