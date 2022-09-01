import React from "react"
import classes from "./scss/slider.module.scss"
import Title from "./title"
import OwlCarousel from "react-owl-carousel"
import {useSelector} from "react-redux"
import Image from "../Image"
import "./scss/pagination.scss"

import pattern1 from "../../assets/png/bg/pattern1.png"
import pattern2 from "../../assets/png/bg/pattern2.png"

export default function SliderPhoto({title}) {

    const {catalog} = useSelector(state => state.variables)

    const responsive = {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        950: {
            items: 5
        }
    }

    return (
        <section className={classes.slider} id={"slider-photo"}>
            <div className="w-full">
                <img src={pattern1} alt="" width={250} className={"flex absolute -top-36"}/>
                <img src={pattern2} alt="" width={280} className={"flex absolute left-1/4 -top-44"}/>
            </div>
            <Title text={title}/>
            <div className={classes['owl-theme']}>
                <OwlCarousel
                    loop
                    autoplay
                    nav={false}
                    center={true}
                    responsive={responsive}
                    smartSpeed={500}
                    scrollPerPage={true}
                    pagination={true}
                    paginationNumbers={true}
                >
                    {catalog.map((item, index) => (
                        <div key={item.id} className={'relative overflow-hidden cursor-pointer mx-1'}>
                            <Image item={item} imgId={"imageDoc"}/>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </section>
    )
}