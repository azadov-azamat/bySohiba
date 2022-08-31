import React, {useState} from "react"
import classes from "./comments.module.scss"
import commentImg from "../../assets/ico/comment.png";
import {AiTwotoneStar} from "react-icons/ai";

export default function CreateComment() {

    const [textLength, setTextLength] = useState(0)

    const starsData = Array.from(Array(5).keys())

    return (
        <div className={classes.create}>
            <div className={classes.img}>
                <span>Опишите свое мнение <br/> о нас</span>
                <img src={commentImg} alt=""/>
            </div>
            <form className={classes['type-comment']}>
                <div className={classes.textarea}>
                    <textarea name="comment" id="comment" maxLength={"300"} style={{resize: 'none'}}
                              placeholder={"Написать комментарий..."} onChange={(e)=> setTextLength((e.target.value).length)}/>
                    <span>{textLength}/300</span>
                </div>
                <div className={classes.name}>
                    <input className={"h-9 px-5 py-4"} type="text" name="name" required placeholder={"Ваше имя"}/>
                    <label htmlFor="check">
                        <input id={"check"} type={"checkbox"}/>
                        <span>согласие на обработку данных</span>
                    </label>
                    <div className={classes.stars}>
                        {starsData.map((item, index) => <AiTwotoneStar key={index.toString()}/>)}
                    </div>
                    <button>Отправка</button>
                </div>
            </form>
        </div>
    )
}