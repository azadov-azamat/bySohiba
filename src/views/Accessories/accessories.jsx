import React, {useEffect} from "react"
import * as About from "../../components/AboutPage"
import * as Constant from "../../components/Constants"

import {useDispatch, useSelector} from "react-redux"
import AOS from "aos"
import Instagram from "../../components/Instagram"
import Comments from "../../components/Comments"
import bgEffect from "../../assets/png/bg-effect/BGeffect(Accessories).png"
import * as inst from "../../redux/reducers/Variables"
import {INSTAGRAM_TOKEN} from "../../utils/constants";

export default function Accessories() {

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
        <div className="relative w-full h-auto">
            <img src={bgEffect} alt="" className={"absolute w-full h-full top-0 -z-50"}/>
            <About.Accessories/>
            <Constant.SliderPhoto title={"примеры наших работ"}/>
            <Constant.SliderVideo title={"видеоблог"} data={instaVideos}/>
            <Instagram/>
            <Comments/>
        </div>
    )
}