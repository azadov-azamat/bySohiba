import React from "react"
import classes from "./scss/title.module.scss"

export default function Title({text}){
    return(
        <div className={classes.title}>
            <p>{text}</p>
        </div>
    )
}