import React, {useEffect} from 'react'
import AOS from "aos"
import Header from "../../components/Header"
import Brands from "../../components/Brands"

export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, [])

    return (
        <>
            <Header/>
            <Brands/>
        </>
    )
}