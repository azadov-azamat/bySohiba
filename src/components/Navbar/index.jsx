import React, {useEffect, useState} from 'react'
import classes from "./navbar.module.scss"
import logo from "../../assets/png/logo.png"
import {useTranslation} from "react-i18next"
import phone from "../../assets/ico/phone.png"
import langIco from "../../assets/ico/lang.png";
import clock from "../../assets/ico/clock.png";
import location from "../../assets/ico/location.png";

export default function Navbar() {

    const {t, i18n} = useTranslation()
    const {language} = i18n

    const [position, setPosition] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
    }, [])

    const listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop
        setPosition(winScroll)
    }

    const links = [
        {id: 1, name: 'Свадебные платья', href: '#service'},
        {id: 2, name: 'Abaya Boutique', href: '#portfolio'},
        {id: 3, name: 'Beauty salon', href: '#contact'}
    ]

    const links2 = [
        {id: 1, name: 'Свадебные платья', href: '#service'},
        {id: 2, name: 'Abaya Boutique', href: '#portfolio'}
    ]

    const links3 = [
        {id: 1, name: 'Beauty salon', href: '#service'},
        {id: 2, name: 'Aksessuarlar', href: '#portfolio'}
    ]
    const linksMd = [
        {id: 1, name: 'Свадебные платья', href: '#service'},
        {id: 2, name: 'Abaya Boutique', href: '#portfolio'},
        {id: 3, name: 'Beauty salon', href: '#contact'},
        {id: 3, name: 'Aksessuarlar', href: '#contact'}
    ]

    const links4 = [
        {id: 1, name: <>Аксессуары</>, href: '#service'},
        {
            id: 2,
            name: <>
                <img src={phone} alt="ico-phone"/>
                +998 97 101 88-80
            </>,
            href: 'tel:+998 97 101 88-80'
        },
        {
            id: 3,
            name: <>
                <img src={langIco} alt="lang_item" className={"w-6"}/>
                <p>Рус</p>
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

    const social = [
        {
            link: "https://www.instagram.com/azadov_azamat",
            name: 'Instagram'
        },
        {
            link: "https://t.me/azamat_azadov",
            name: 'Telegram'
        },
        {
            link: "https://t.me/azamat_azadov",
            name: 'Tik tok'
        }
    ]

    return (
        <nav className={classes.navbar}>
            <div className={'hidden xl:flex'}>
                <ul className={classes['nav-ul']}>
                    {links.map(link => <li key={link.id}><a href={link.href}>{link.name}</a>
                    </li>)}
                </ul>
            </div>

            <div className={"md:block xl:hidden hidden"}>
                <ul className={classes['nav-ul']}>
                    {links2.map(link => <li key={link.id}><a href={link.href}>{link.name}</a>
                    </li>)}
                </ul>
            </div>

            <div className={classes.logo}>
                <img src={logo} alt="logo-name"/>
                <p className={"uppercase"}>Weddings</p>
            </div>


            <div className={"hidden xl:flex"}>
                <ul className={classes['nav-ul']}>
                    {links4.map(link => <li key={link.id}><a className={"flex items-center gap-3"}
                                                             href={link.href}>{link.name}</a>
                    </li>)}
                </ul>
            </div>

            <div className={"md:block xl:hidden hidden"}>
                <ul className={classes['nav-ul']}>
                    {links3.map(link => <li key={link.id}><a href={link.href}>{link.name}</a>
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
                        {linksMd.map(link => <li key={link.id}><a href={link.href}>{link.name}</a></li>)}
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
                                    {social.map(item=> <li key={item.link}><a href={item.link} target={"_blank"}>{item.name}</a></li>)}
                                </ul>
                            </div>
                        </div>
                        <div className={classes.address}>
                            <p>
                                <div>
                                    <img src={clock} alt="clock-ico"/>
                                </div>
                                Без выходных 10:00 - 19:00
                            </p>
                            <p>
                                <div>
                                    <img src={location} alt="location-ico"/>
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