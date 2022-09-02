import React, {useEffect} from "react"
import classes from "./button.module.scss"

export default function Ripple({children, onClick, color, type, disable, outline}) {

    const [coords, setCoords] = React.useState({x: -1, y: -1});
    const [isRippling, setIsRippling] = React.useState(false);

    useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 300);
        } else setIsRippling(false);
    }, [coords]);

    useEffect(() => {
        if (!isRippling) setCoords({x: -1, y: -1});
    }, [isRippling]);

    return (
        <button
            type={type ? type : "submit"}
            disabled={disable ? disable : false}
            className={classes['ripple-button'] + ' ' + classes[`${color}`]}
            onClick={e => {
                const rect = e.target.getBoundingClientRect();
                setCoords({x: e.clientX - rect.left, y: e.clientY - rect.top});
                onClick && onClick(e);
            }}
        >
            {outline ?
                <span className={classes.span}></span> :
                isRippling ? (
                        <span
                            className={classes.ripple}
                            style={{
                                left: coords.x,
                                top: coords.y
                            }}
                        />
                    ) : (
                        ''
                    )
            }
            <span className={classes.content}>{children}</span>
        </button>
    )
}