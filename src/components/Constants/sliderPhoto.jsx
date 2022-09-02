import React from "react"
import classes from "./scss/slider.module.scss"
import Title from "./title"
import OwlCarousel from "react-owl-carousel"
import {useSelector} from "react-redux"
import Image from "../Image"
import "./scss/pagination.scss"

import pattern1 from "../../assets/png/bg/pattern1.png"
import pattern2 from "../../assets/png/bg/pattern2.png"

import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay,
    Virtual
} from "swiper/core"

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

export default function SliderPhoto({title}) {

    const {catalog} = useSelector(state => state.variables)

    const responsive = {
        1500: {
            minWidth: 1500,
        },
        1405: {
            minWidth: 1405,
        },
        1360: {
            minWidth: 1360,
        },
        1300: {
            minWidth: 1300,
            slidesPerView: 6
        },
        1200: {
            minWidth: 1200,
            slidesPerView: 5
        },
        1025: {
            minWidth: 1025,
            slidesPerView: 4
        },
        964: {
            minWidth: 964,
            slidesPerView: 4
        },
        708: {
            minWidth: 708,
            slidesPerView: 4
        },
        426: {
            minWidth: 426,
            slidesPerView: 3
        },
        320: {
            minWidth: 320,
            slidesPerView: 3
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
                <Swiper
                    slidesPerColumn={2}
                    spaceBetween={30}
                    allowTouchMove={true}
                    autoHeight={true}
                    slidesPerView={5}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={responsive}
                    pagination = {{
                        clickable: true,
                        // el: 'swiper-pagination',
                        type: 'bullets',
                        bulletElement: 'span',
                        bulletClass: 'timeline-icon',
                        bulletActiveClass: 'timeline-icon-active',
                        renderBullet: function (index, className) {
                            return '<span class="' + className + '">' + (index + 1)  + '</span>';
                        }
                    }}

                >
                    {catalog.map((item, index) => (
                        <SwiperSlide key={item.id} className={'relative overflow-hidden cursor-pointer mx-1'}>
                            <Image item={item} imgId={"imageDoc"}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}