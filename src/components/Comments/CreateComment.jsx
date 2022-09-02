import React, {useState} from "react"
import classes from "./comments.module.scss"
import commentImg from "../../assets/ico/comment.png"
import {AiFillStar, AiTwotoneStar} from "react-icons/ai"
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {pushComment} from "../../redux/reducers/Variables";

export default function CreateComment() {

    const dispatch = useDispatch()

    const [textLength, setTextLength] = useState(0)
    const [stars, setStars] = useState(0)
    const [checked, setChecked] = useState(false)

    const toggle = () => setChecked(!checked)

    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }

    const formik = useFormik({
        initialValues: {},
        onSubmit: (val, {resetForm}) => {
            const data = {
                id: uuidv4(),
                stars,
                ...val
            }
            dispatch(pushComment(data))
            resetForm({values: ''})
        }
    })

    return (
        <div className={classes.create}>
            <div className={classes.img}>
                <span>Опишите свое мнение <br/> о нас</span>
                <img src={commentImg} alt=""/>
            </div>
            <form className={classes['type-comment']}>
                <div className={classes.textarea}>
                    <textarea name="text" id="comment" maxLength={300} style={{resize: 'none'}}
                              placeholder={"Написать комментарий..."}
                              onChange={(e) => {
                                  setTextLength((e.target.value).length)
                                  formik.setFieldValue("text", e.target.value)
                              }} required/>
                    <span>{textLength}/300</span>
                </div>
                <div className={classes.name}>
                    <input className={"h-9 px-5 py-4"} type="text" name="name" required placeholder={"Ваше имя"}
                           onChange={formik.handleChange}/>
                    <label htmlFor="check">
                        <input
                            id={"check"}
                            type={"checkbox"}
                            onChange={toggle}
                            className="checked:bg-primary_black rounded-xl bg-transparent w-8 border-none focus:shadow-none"
                        />
                        <span>согласие на обработку данных</span>
                    </label>
                    <div className={classes.stars}>
                        {[1, 2, 3, 4, 5].map((index) => <AiFillStar key={index}
                                                                    style={stars >= index ? {color: '#6C9392'} : {color: "#D9D9D9"}}
                                                                    onClick={() => setStars(index)}/>)}
                    </div>
                    <button type={"reset"} onClick={formik.handleSubmit}>Отправка</button>
                </div>
            </form>
        </div>
    )
}