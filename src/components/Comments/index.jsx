import React from "react"
import classes from "./comments.module.scss"
import ListComments from "./ListComments"
import OwlCarousel from 'react-owl-carousel'
import {useSelector} from "react-redux"
import "./carousel.scss"
import CreateComment from "./CreateComment"
import Title from "../Constants/title"

export default function Comments() {

    const {comments} = useSelector(state => state.variables)
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
            items: 2
        },
        1300: {
            items: 3
        },
        1500: {
            items: 4
        }
    }
    console.log(comments)
    return (
        <div className={classes.wrapper}>
            <Title text={"Дадим слова нашим клиентам"}/>
            <div className={comments?.length === 0 ? "hidden" : classes['owl-theme']}>
                <OwlCarousel
                    loop
                    autoplay={true}
                    nav={true}
                    center={true}
                    dots={false}
                    responsive={responsive}
                    smartSpeed={500}
                >
                    {comments.map((item, index) => (
                        <ListComments key={index} name={item.name} text={item.text} stars={item.stars}/>
                    ))}
                </OwlCarousel>
            </div>
            <CreateComment/>
        </div>
    )
}