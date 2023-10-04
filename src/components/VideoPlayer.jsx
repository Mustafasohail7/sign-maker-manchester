import {useState} from "react"
import { BsPlayCircle } from "react-icons/bs"

//stylesheet
import "../styles/VideoPlayer.css"

import thumbnail from '../assets/thumbnail.jpg'

const VideoPlayer = () => {

    const [play,setPlay] = useState(false)

    const handlePlay = () => {
        setPlay(true)
    }

  return (
    <div className="video-container">
        <div className="thumbnail" onClick={handlePlay}>
            {!play ? <div className="thumbnail-container">
                <img src={thumbnail} alt="Napoleon" />
                <div className="play-icon">
                    <BsPlayCircle size={100} />
                </div>
                </div> : 
            (
                <iframe src="https://www.youtube.com/embed/Y-jOqEcKJFE?rel=0&amp;autoplay=1" title="YouTube video player" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            )}
        </div>
    </div>
  )
}

export default VideoPlayer

