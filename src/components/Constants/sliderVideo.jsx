import React from "react"
import classes from "./scss/slider.module.scss"
import Title from "./title"
import OwlCarousel from "react-owl-carousel"
import {useSelector} from "react-redux"
import Image from "../Image"
import "./scss/pagination.scss"
import {Col} from "antd";

export default function SliderVideo({title, data}) {

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
        <section className={classes.slider} id={"slider-video"}>
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
                    {data.map((item, index) => (
                        <Col key={item.id} className={"2xl:w-56 xl:w-52 lg:w-48 md:w-44 sm:w-40 w-36 h-auto"}>
                            <video controls>
                                <source src={item.src} type="video/mp4"/>
                                Your browser does not support HTML video.
                            </video>
                        </Col>
                    ))}
                </OwlCarousel>
            </div>
        </section>
    )
}