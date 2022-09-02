import React from "react"
import classes from "./scss/slider.module.scss"
import Title from "./title"
import "./scss/pagination.scss"

import {Swiper, SwiperSlide} from "swiper/react"
import SwiperCore, {Autoplay, Navigation, Pagination, Virtual} from "swiper/core"

SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

export default function SliderVideo({title, data}) {

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
        <section className={classes.slider} id={"slider-video"}>
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
                    {data.map((item, index) => (
                        <SwiperSlide key={item.id} className={"2xl:w-56 xl:w-52 lg:w-48 md:w-44 sm:w-40 w-36 h-auto"}>
                            <video controls>
                                <source src={item.src} type="video/mp4"/>
                                Your browser does not support HTML video.
                            </video>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            {/*<div className={classes['owl-theme']}>*/}
            {/*    <OwlCarousel*/}
            {/*        loop*/}
            {/*        autoplay*/}
            {/*        nav={false}*/}
            {/*        center={true}*/}
            {/*        responsive={responsive}*/}
            {/*        smartSpeed={500}*/}
            {/*        scrollPerPage={true}*/}
            {/*    >*/}
            {/*        {data.map((item, index) => (*/}
            {/*            <Col key={item.id} className={"2xl:w-56 xl:w-52 lg:w-48 md:w-44 sm:w-40 w-36 h-auto"}>*/}
            {/*                <video controls>*/}
            {/*                    <source src={item.src} type="video/mp4"/>*/}
            {/*                    Your browser does not support HTML video.*/}
            {/*                </video>*/}
            {/*            </Col>*/}
            {/*        ))}*/}
            {/*    </OwlCarousel>*/}
            {/*</div>*/}
        </section>
    )
}