import React, {useEffect, useState} from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Instagram from "../components/Instagram"
import Comments from "../components/Comments"
import Refresh from "../components/Animation"
import {useDispatch, useSelector} from "react-redux"
import {handleRefresh} from "../redux/reducers/Variables"

export default function Layout({children}) {

    const dispatch = useDispatch()
    const {loadingPage} = useSelector(state => state.variables)

    useEffect(() => {
        setTimeout(() => {
            dispatch(handleRefresh(true))
        }, 2000);
    }, []);

    return (
        <>
            <Refresh loading={loadingPage}/>
            <Navbar/>
            <main className={""}>
                {children}
            </main>
            <Footer/>
        </>
    )
}