import React from "react"
import classes from "./scss/slider.module.scss"
import Title from "./title"
import OwlCarousel from "react-owl-carousel"
import {useSelector} from "react-redux"
import Image from "../Image"
import "./scss/pagination.scss"

export default function Slider({title}) {

    const {comments, catalog} = useSelector(state => state.variables)
    const responsive = {
        0: {
            items: 1
        },
        600: {
            items: 1.5
        },
        640: {
            items: 2
        },
        950: {
            items: 3
        },
        1024: {
            items: 2
        },
        1200: {
            items: 4
        },
        1300: {
            items: 5
        }
    }

    return (
        <section className={classes.slider}>
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