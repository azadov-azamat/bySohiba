import React from "react"
import classes from "./scss/title.module.scss"

export default function Title({text}){
    return(
        <div className={classes.title} data-aos="fade-up">
            <p>{text}</p>
        </div>
    )
}