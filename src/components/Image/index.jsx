import React from "react"
import "./main.scss"

export default function Image({item}){

    function status(status) {
        switch (status) {
            case "NEW":
                return (
                    <span className={"new"}>Новинка</span>
                )
            default:
            case "HAND":
                return (
                    <span className={"hand"}>ручная работа</span>
                )
        }
    }

    return(
        <>
            <img src={item.img} alt="img"/>
            {
                item.type !== "OLD" && <>
                    <div className={"status"}>{status(item.type)}</div>
                </>
            }
        </>
    )
}