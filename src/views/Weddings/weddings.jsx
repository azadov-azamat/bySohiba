import React from "react"
import * as Header from "../../components/Header"
import * as About from "../../components/AboutPage"
import Catalog from "../../components/Catalog"

export default function Weddings() {
    return (
        <>
            <Header.wedding/>
            <About.wedding/>
            <Catalog/>
        </>
    )
}