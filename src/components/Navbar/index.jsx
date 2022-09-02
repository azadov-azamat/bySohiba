import React, {useEffect, useState} from 'react'
import classes from "./navbar.module.scss"
import logo from "../../assets/png/logo.png"
import {FiPhone} from "react-icons/fi"
import {BsClock, BsGlobe} from "react-icons/bs"
import {IoLocationOutline} from "react-icons/io5"
import {useDispatch, useSelector} from "react-redux"
import {Link, useLocation} from "react-router-dom"
import {defaultRoute} from "../../utils/constants"
import {handleRefresh} from "../../redux/reducers/Variables"

export default function Navbar() {

    const dispatch = useDispatch()
    const location = useLocation()
    const path = location?.pathname

    const [lang, setLang] = useState(false)
    const [position, setPosition] = useState(0)

    const {social, languages} = useSelector(state => state.variables)

    const toggle =()=> setLang(!lang)

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])

    const listenToScroll = () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop
        setPosition(winScroll)
    }

    const links = [
        {id: 0, name: "Главная страница", href: defaultRoute},
        {id: 1, name: 'Свадебные платья', href: '/weddings'},
        {id: 2, name: 'Abaya Boutique', href: '/abayas'},
        {id: 3, name: 'Beauty salon', href: '/beauty'}
    ]

    const links2 = [
        {id: 0, name: "Главная страница", href: defaultRoute},
        {id: 1, name: 'Свадебные платья', href: '/weddings'},
        {id: 2, name: 'Abaya Boutique', href: '/abayas'}
    ]

    const links3 = [
        {id: 0, name: 'Abaya Boutique', href: '/abayas'},
        {id: 1, name: 'Beauty salon', href: '/beauty'},
        {id: 2, name: 'Аксессуары', href: '/accessories'}
    ]
    const linksMd = [
        {id: 0, name: "Главная страница", href: defaultRoute},
        {id: 1, name: 'Свадебные платья', href: '/weddings'},
        {id: 2, name: 'Abaya Boutique', href: '/abayas'},
        {id: 3, name: 'Beauty salon', href: '/beauty'},
        {id: 4, name: 'Аксессуары', href: '/accessories'}
    ]

    const links4 = [
        {
            id: 1,
            name: <>
                <FiPhone fontSize={15}/>
                +998 97 101 88-80
            </>,
            href: 'tel:+998 97 101 88-80',
            onClick: () => console.log("phone...")
        },
        {
            id: 2,
            name: <>
                <BsGlobe fontSize={15}/>
                {lang ? "Узб" : "Рус"}
            </>,
            href: '#',
            onClick: ()=>{
                changeLang()
                setTimeout(() => {
                    toggle()
                }, 1000);
            }
        }
    ]

    function changeLang() {
        dispatch(handleRefresh(false))
        setTimeout(() => {
            dispatch(handleRefresh(true))
        }, 2000);
    }

    links.forEach(item => {
        delete links[item.href === path && item.id]
    })
    linksMd.forEach(item => {
        delete linksMd[item.href === path && item.id]
    })
    links2.forEach(item => {
        delete links2[item.href === path && item.id]
    })
    links3.forEach(item => {
        delete links3[item.href === path && item.id]
    })

    if (path === "/weddings") delete links3[0]
    if (path === defaultRoute) delete links3[0]
    if (path === "/beauty") delete links2[2]
    if (path === "/accessories") delete links2[2]

    return (
        <nav className={position !== 0 || path === "/accessories" ? classes['nav-scroll'] : classes.navbar}>
            <div className={'hidden xl:flex'}>
                <ul className={classes['nav-ul']}>
                    {links.map(link => <li key={link.id}><Link to={link.href}>{link.name}</Link>
                    </li>)}
                </ul>
            </div>

            <div className={"md:block xl:hidden hidden"}>
                <ul className={classes['nav-ul']}>
                    {links2.map(link => <li key={link.id}><Link to={link.href}>{link.name}</Link>
                    </li>)}
                </ul>
            </div>

            <Link to={defaultRoute} className={classes.logo}>
                <img src={logo} alt="logo-name"/>
                <p className={"uppercase"}>Weddings</p>
            </Link>


            <div className={"hidden xl:flex"}>
                <ul className={classes['nav-ul']}>
                    {path !== "/accessories" ?
                        <li><Link to={'/accessories'} className={"flex items-center gap-2"}>Аксессуары</Link></li> :
                        <li><Link to={'/beauty'} className={"flex items-center gap-2"}>Beauty salon</Link></li>
                    }
                    {links4.map(link => <li key={link.id}><a className={"flex items-center gap-2"}
                                                             href={link.href} onClick={link.onClick}>{link.name}</a>
                    </li>)}
                </ul>
            </div>

            <div className={"md:block xl:hidden hidden"}>
                <ul className={classes['nav-ul']}>
                    {links3.map(link => <li key={link.id}><Link to={link.href}>{link.name}</Link>
                    </li>)}
                </ul>
            </div>

            <div className={classes.toggle}>
                <input className={classes.checkbox} type="checkbox" name="" id=""/>
                <div className={classes['hamburger-lines']}>
                    <span className={classes.line1}></span>
                    <span className={classes.line2}></span>
                    <span className={classes.line3}></span>
                </div>
                <div className={classes.menu}>
                    <ul className={classes['menu-ul']}>
                        {linksMd.map(link => <li key={link.id}><Link to={link.href}>{link.name}</Link></li>)}
                    </ul>
                    <div className={classes.variable}>
                        <div className={classes.setting}>
                            <div className={classes.lang}>
                                {languages.map((item, index) =>
                                    <button key={index} onClick={changeLang}>
                                        {item.name2}
                                        <span></span>
                                    </button>
                                )}
                            </div>
                            <div className={classes.social}>
                                <ul>
                                    {social.map((item, index) => <li key={index}><a href={item.link}
                                                                                    target={"_blank"}>{item.name}</a>
                                    </li>)}
                                </ul>
                            </div>
                        </div>
                        <div className={classes.address}>
                            <div className={classes.p}>
                                <div>
                                    <BsClock fontSize={15}/>
                                </div>
                                Без выходных 10:00 - 19:00
                            </div>
                            <div className={classes.p}>
                                <div>
                                    <IoLocationOutline fontSize={15}/>
                                </div>
                                Ташкент, улица Мирза Голиб 1
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}