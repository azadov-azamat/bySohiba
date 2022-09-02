import React, {useState} from "react"
import classes from "./comments.module.scss"
import commentImg from "../../assets/ico/comment.png"
import {AiFillStar, AiTwotoneStar} from "react-icons/ai"

export default function CreateComment() {

    const [textLength, setTextLength] = useState(0)

    const [stars, setStars] = useState(0)

    return (
        <div className={classes.create}>
            <div className={classes.img}>
                <span>Опишите свое мнение <br/> о нас</span>
                <img src={commentImg} alt=""/>
            </div>
            <form className={classes['type-comment']}>
                <div className={classes.textarea}>
                    <textarea name="comment" id="comment" maxLength={"300"} style={{resize: 'none'}}
                              placeholder={"Написать комментарий..."}
                              onChange={(e) => setTextLength((e.target.value).length)}/>
                    <span>{textLength}/300</span>
                </div>
                <div className={classes.name}>
                    <input className={"h-9 px-5 py-4"} type="text" name="name" required placeholder={"Ваше имя"}/>
                    <label htmlFor="check">
                        <input id={"check"} type={"checkbox"}/>
                        <span>согласие на обработку данных</span>
                    </label>
                    <div className={classes.stars}>
                        {[1, 2, 3, 4, 5].map((index) => <AiFillStar key={index}
                                                                    style={stars >= index ? {color: '#6C9392'} : {color: "#D9D9D9"}}
                                                                    onClick={() => setStars(index)}/>)}
                    </div>
                    <button>Отправка</button>
                </div>
            </form>
        </div>
    )
}