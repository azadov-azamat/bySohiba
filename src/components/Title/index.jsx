import React from "react"
import classes from "./title.module.scss"

export default function Title({text}){
    return(
        <div className={classes.title}>
            <p>{text}</p>
        </div>
    )
}