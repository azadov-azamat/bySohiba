import React, {useEffect, useState} from "react"
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

export default function SliderPhoto({title, bg}) {

    const {catalog} = useSelector(state => state.variables)

    const [width, setWidth] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])

    const listenToScroll = () => {
        const winScroll = window.innerWidth
        setWidth(winScroll)
    }

    const responsive = {
        0: {
            slidesPerView: 2
        },

        530: {
            minWidth: 530,
            slidesPerView: 3
        },
        600: {
            minWidth: 600,
            slidesPerView: 5
        },
        950: {
            minWidth: 950,
            slidesPerView: 5
        }
    }

    return (
        <section className={classes.slider} id={"slider-photo"}>
            {/*{*/}
            {/*    bg ? <div className="w-full">*/}
            {/*        <img src={pattern1} alt="" width={250} className={"flex absolute -top-36"}/>*/}
            {/*        <img src={pattern2} alt="" width={280} className={"flex absolute left-1/4 -top-44"}/>*/}
            {/*    </div> : ""*/}
            {/*}*/}
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
                    {catalog.slice(0, width < 530 ? 6 : 9).map((item, index) => (
                        <SwiperSlide key={item.id} className={'relative overflow-hidden cursor-pointer mx-1'}>
                            <Image item={item} imgId={"imageDoc"}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}