import React from "react"
import * as Header from "../../components/Header"
import * as About from "../../components/AboutPage"
import Catalog from "../../components/Catalog"
import Video from "../../components/VideoGallery"

export default function Weddings() {
    return (
        <>
            <Header.wedding/>
            <About.wedding/>
            <Catalog/>
            <Video/>
        </>
    )
}