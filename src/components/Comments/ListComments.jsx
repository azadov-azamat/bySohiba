import React from "react"
import classes from './comment.module.scss'
import {AiFillStar} from "react-icons/ai"
import commentImg from "../../assets/ico/comment.png"

export default function ListComments({name, text, stars}) {

    return (
        <div className={classes.carousel}>
            <div className={classes.list}>
                <div className={classes.head}>
                    <div className={classes.quote}>
                        <img src={commentImg} alt=""/>
                    </div>
                </div>
                <p className={classes['p-text']}>{text}</p>
                <div className={classes.owner}>
                    <div className={classes.name}>{name}</div>
                    <div className={classes.stars}>
                        {[1, 2, 3, 4, 5].map((index) => <AiFillStar key={index} fontSize={20} style={stars>=index?{color:'#6C9392'}:{color: "#D9D9D9"}}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}