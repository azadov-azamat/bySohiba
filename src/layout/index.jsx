import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Instagram from "../components/Instagram"
import Comments from "../components/Comments"

export default function Layout({children}) {

    return (
        <>
            <Navbar/>
            <main className={""}>
                {children}
            </main>
            <Instagram/>
            <Comments/>
            <Footer/>
        </>
    )
}