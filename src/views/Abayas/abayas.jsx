import React, {useEffect} from "react"
import * as Header from "../../components/Header"
import * as About from "../../components/AboutPage"
import * as Constant from "../../components/Constants"
import Photos from "../../components/PhotoGallery"

import {useDispatch, useSelector} from "react-redux"
import AOS from "aos"
import bgEffect from "../../assets/png/bg-effect/BGeffect (Abayas).png"
import Instagram from "../../components/Instagram"
import Comments from "../../components/Comments"
import * as inst from "../../redux/reducers/Variables"
import {INSTAGRAM_TOKEN} from "../../utils/constants"

export default function Abayas() {

    const {catalog} = useSelector(state => state.variables)

    const dispatch = useDispatch()
    const {instaVideos, isLoading} = useSelector(state => state.variables)

    useEffect(() => {
        if (instaVideos?.length === 0)
            dispatch(inst.getInstagramVideosList(INSTAGRAM_TOKEN))
    }, [])

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])

    return (
        <>
            <Header.Abayas/>
            <div className="relative w-full h-auto">
                <img src={bgEffect} alt="" className={"absolute w-full h-full top-0"}/>
                <About.Abayas/>
                <Photos/>
                <Constant.Catalog title={"Abaya платья"} data={catalog}/>
                <Constant.SliderPhoto title={"Обувь"} bg={true}/>
                <Constant.SliderPhoto title={"аксессуары"} bg={false}/>
                <Constant.SliderVideo title={"Видеоблог"} data={instaVideos}/>
                <Instagram/>
                <Comments/>
            </div>
        </>
    )
}