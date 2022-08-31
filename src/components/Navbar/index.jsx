import React, {useEffect, useState} from 'react'
import classes from "./navbar.module.scss"
import logo from "../../assets/png/logo.png"
import {FiPhone} from "react-icons/fi"
import {BsClock, BsGlobe} from "react-icons/bs"
import {IoLocationOutline} from "react-icons/io5"
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {defaultRoute} from "../../utils/constants";

export default function Navbar() {

    const [position, setPosition] = useState(0)
    const {social} = useSelector(state => state.variables)

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])

    const listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop
        setPosition(winScroll)
    }

    const links = [
        {id: 1, name: 'Свадебные платья', href: '/weddings'},
        {id: 2, name: 'Abaya Boutique', href: '#portfolio'},
        {id: 3, name: 'Beauty salon', href: '#contact'}
    ]

    const links2 = [
        {id: 1, name: 'Свадебные платья', href: '/weddings'},
        {id: 2, name: 'Abaya Boutique', href: '#portfolio'}
    ]

    const links3 = [
        {id: 1, name: 'Beauty salon', href: '#service'},
        {id: 2, name: 'Аксессуары', href: '#portfolio'}
    ]
    const linksMd = [
        {id: 1, name: 'Свадебные платья', href: '/weddings'},
        {id: 2, name: 'Abaya Boutique', href: '#portfolio'},
        {id: 3, name: 'Beauty salon', href: '#contact'},
        {id: 3, name: 'Аксессуары', href: '#contact'}
    ]

    const links4 = [
        {id: 1, name: <>Аксессуары</>, href: 'https://'},
        {
            id: 2,
            name: <>
                <FiPhone fontSize={15}/>
                +998 97 101 88-80
            </>,
            href: 'tel:+998 97 101 88-80'
        },
        {
            id: 3,
            name: <>
                <BsGlobe fontSize={15}/>
                Рус
            </>,
            href: 'tel:+998 97 101 88-80'
        }
    ]

    const languages = [
        {
            value: "ru",
            name: 'Рус',
            name2: 'Русский'
        },
        {
            value: "uz",
            name: 'Узб',
            name2: 'O`zbekcha'
        }
    ]

    return (
        <nav className={classes.navbar}>
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
                    {links4.map(link => <li key={link.id}><a className={"flex items-center gap-2"}
                                                             href={link.href}>{link.name}</a>
                    </li>)}
                </ul>
            </div>

            <div className={"md:block xl:hidden hidden"}>
                <ul className={classes['nav-ul']}>
                    {links3.map(link => <li key={link.id}><Link to={link.href}>{link.name}</Link>
                    </li>)}
                </ul>
            </div>

            <div className={position !== 0 ? classes.toggle + " fixed flex justify-center items-center" +
                " w-14 h-14 rounded-full top-[15px] bg-primary_black right-1 z-50" : classes.toggle}>
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
                                    <button>
                                        {item.name2}
                                        <span></span>
                                    </button>
                                )}
                            </div>
                            <div className={classes.social}>
                                <ul>
                                    {social.map((item, index) => <li key={index.toString()}><a href={item.link}
                                                                                               target={"_blank"}>{item.name}</a>
                                    </li>)}
                                </ul>
                            </div>
                        </div>
                        <div className={classes.address}>
                            <p>
                                <div>
                                    <BsClock fontSize={15}/>
                                </div>
                                Без выходных 10:00 - 19:00
                            </p>
                            <p>
                                <div>
                                    <IoLocationOutline fontSize={15}/>
                                </div>
                                Ташкент, улица Мирза Голиб 1
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}