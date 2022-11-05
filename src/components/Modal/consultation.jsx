import React from "react"
import styles from "./modal.module.scss"

export default function Consultation({ setIsOpen }) {
    return (
        <div className={"relative w-full h-auto"}>
            <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
            <div className={styles.centered}>
                <div className={styles.modal}>

                </div>
            </div>
        </div>
    )
}