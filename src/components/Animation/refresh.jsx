import React from 'react'
import "./spinner.scss"
import Spinner from "./spinner";

export default function Refresh({loading}) {
    return (
        <div id={"main-page"}>
            <div className={`div-main ${loading}`}>
                <Spinner/>
            </div>
        </div>
    )
}