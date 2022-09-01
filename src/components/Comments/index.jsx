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

    return (
        <div className={classes.wrapper}>
            <Title text={"Дадим слова нашим клиентам"}/>
            <div className={classes['owl-theme']}>
                <OwlCarousel
                    loop
                    nav={true}
                    center={true}
                    responsive={responsive}
                    smartSpeed={500}
                >
                    {comments.map((item, index) => (
                        <ListComments key={item.id} name={item.name} text={item.text} stars={item.stars}/>
                    ))}
                </OwlCarousel>
            </div>
            <CreateComment/>
        </div>
    )
}