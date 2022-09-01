import React, {useState} from 'react'
import Lightbox from "react-image-lightbox"

export default function ImagePreview({data, dataId, setOpen}){

    const [imgIndex, setImgIndex] = useState(dataId);

    function status(status) {
        switch (status) {
            case "NEW":
                return "Новинка"

            case "HAND":
                return "Ручная работа"
            default:
            case "OLD":
                return "Старый"
        }
    }

    return(
        <Lightbox
            imageTitle={status(data[imgIndex].type)}
            // imageCaption={data[imgIndex].type}
            mainSrc={data[imgIndex].img}
            nextSrc={data[(imgIndex + 1) % data.length].img}
            prevSrc={data[(imgIndex + data.length - 1) % data.length].img}
            onCloseRequest={() => setOpen(false)}
            onMovePrevRequest={() => setImgIndex((imgIndex + data.length - 1) % data.length)}
            onMoveNextRequest={() => setImgIndex((imgIndex + 1) % data.length)}
        />
    )
}