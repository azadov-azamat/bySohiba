import React, {useEffect} from "react"
import classes from "./footer.module.scss"
import logo from "../../assets/png/logo.png"
import {useDispatch, useSelector} from "react-redux"
import Title from "../Constants/title"
import {handleSetId} from "../../redux/reducers/Variables"

export default function Footer(){

    const dispatch = useDispatch()
    const {social, filial, activeId} = useSelector(state => state.variables)

    useEffect(()=>{
        dispatch(handleSetId(0))
    },[])

    return(
        <footer className={classes.footer}>
            <Title text={"наш адрес"}/>
            <div className={classes.data}>
               <div className={classes['footer-top']}>
                   <div className={classes.tex1}>
                       <div className={classes.nav}>
                           {filial.map((item, index) => <div key={item?.id} className={activeId === index ? classes.active : classes['not-active']}
                                                             onClick={()=> activeId !== index && dispatch(handleSetId(index))}>{item?.name}</div>)}
                       </div>
                       <div className={classes.data}>
                           <div className={classes.text}>
                               <span className={classes.p}>Адрес</span>
                               <span>{filial[activeId]?.address}</span>
                               <span>Ориентр: {filial[activeId]?.orient}</span>
                           </div>
                           <div className={classes.text}>
                               <span className={classes.p}>Время работы</span>
                               <span>{filial[activeId]?.workTime}</span>
                           </div>
                           <div className={classes.text}>
                               <span className={classes.p}>Номер телефона</span>
                               <span><a href={`tel:${filial[activeId]?.phoneNumber}`}>{filial[activeId]?.phoneNumber}</a></span>
                           </div>
                       </div>
                       <div className={classes.social}>
                           <ul>
                               {social.map((item, index) => <li key={index}><a href={item?.link}
                                                                                          target={"_blank"}>{item?.name}</a></li>)}
                           </ul>
                       </div>
                   </div>
                   <div className={classes.data}>
                       <div className={classes.location}>
                           <a className={classes.name} href="https://yandex.uz/maps/org/9860048136/?utm_medium=mapframe&utm_source=maps">By Sohiba weddings</a>
                           <a className={classes.title} href="https://yandex.uz/maps/10335/tashkent/category/bridal_salon/184108335/?utm_medium=mapframe&utm_source=maps">
                               Bridal Salon in Tashkent
                           </a>
                           <iframe src="https://yandex.uz/map-widget/v1/-/CCUVUIgJ8C" frameBorder="1"
                                   allowFullScreen={true}></iframe>
                       </div>
                   </div>
                   <div className={classes.tex2}>
                        <div className={classes.nav}>
                            {filial.map((item, index) => <div key={item?.id} className={activeId === index ? classes.active : classes['not-active']}
                                                      onClick={()=> activeId !== index && dispatch(handleSetId(index))}>{item?.name}</div>)}
                        </div>
                       <div className={classes.data}>
                           <div className={classes.text}>
                               <span className={classes.p}>Адрес</span>
                               <span>{filial[activeId]?.address}</span>
                               <span>Ориентр: {filial[activeId]?.orient}</span>
                           </div>
                           <div className={classes.text}>
                               <span className={classes.p}>Время работы</span>
                               <span>{filial[activeId]?.workTime}</span>
                           </div>
                           <div className={classes.text}>
                               <span className={classes.p}>Номер телефона</span>
                               <span><a href={`tel:${filial[activeId]?.phoneNumber}`}>{filial[activeId]?.phoneNumber}</a></span>
                           </div>
                       </div>
                       <div className={classes.social}>
                           <ul>
                               {social.map((item, index) => <li key={index}><a href={item?.link}
                                                                                          target={"_blank"}>{item?.name}</a></li>)}
                           </ul>
                       </div>
                   </div>
               </div>
                <div className={classes['footer-bottom']}>
                    <div className={classes['data-bottom']}>
                        <div className={classes.img1}>
                            <img src={logo} alt=""/>
                        </div>
                        <div className={classes.span}>“bySohiba” {new Date().getFullYear()}. Все права защищены.</div>
                        <div className={classes.img2}>
                            <img src={logo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}