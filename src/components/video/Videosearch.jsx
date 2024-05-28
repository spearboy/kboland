import React from 'react'
import { Link } from 'react-router-dom'

const Videosearch = ({videos}) => {
  return (
    <>
        {videos.map((video, index) => (
            < div className='video' key={index} >
                <div className="video__thumb play__icon">
                    <Link to={`/video/${video.id.videoId}`} style={{backgroundImage: `url(${video.snippet.thumbnails.high.url})`}}></Link>
                </div>
                <div className="video__info">
                    <div className='title'>
                        <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                    </div>
                    <div className='author'>
                        <Link to={`/channel/${video.snippet.channelId}`}>{video.snippet.channelTitle}</Link>
                    </div>
                </div>
            </div >
        ))}
    </>
  )
}

export default Videosearch