import * as React from "react"

import { YTData } from "../../store/types"
import "./style.scss"

interface IProps {
    data: YTData
}
const Card = (props: IProps) => {
    const { data } = props
    return (
        <div className="card">
            <a href={`https://www.youtube.com/watch?v=${data.id.videoId}`}>
                <div className="img">{data ? <img src={data.snippet.thumbnails.high.url} alt="" /> : null}</div>
                <div className="title">{data?.snippet.description}</div>
            </a>
        </div>
    )
}

export default Card
