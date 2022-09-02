import React from "react"
import classes from "./comments.module.scss"
import {AiTwotoneStar} from "react-icons/ai"
import commentImg from "../../assets/ico/comment.png"
import {RiSingleQuotesR} from "react-icons/ri"

export default function ListComments({name, text, stars}) {

    const starsData = Array.from(Array(stars).keys())

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
                      {starsData.map((item, index)=>  <AiTwotoneStar key={index} fontSize={20}/>)}
                  </div>
              </div>
          </div>
        </div>
    )
}