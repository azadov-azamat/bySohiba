import React from "react"
import classes from "./comments.module.scss"
import {AiTwotoneStar} from "react-icons/ai"
import commentImg from "../../assets/ico/comment.png"
import {RiSingleQuotesR} from "react-icons/ri"

export default function ListComments({key, name, text, stars}) {

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
                      {starsData.map((item, index)=>  <AiTwotoneStar fontSize={20} key={index.toString()}/>)}
                  </div>
              </div>
          </div>
        </div>
    )
}