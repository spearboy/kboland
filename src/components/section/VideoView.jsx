import React from 'react'
import { Link } from 'react-router-dom'

const VideoView = ({ videos }) => {
    // videos가 정의되지 않거나 빈 배열일 경우 처리
    if (!videos || !Array.isArray(videos) || videos.length === 0) {
        return <div>비디오가 없습니다.</div>;
    }

    return (
        <>
            {videos.map((video, index) => (
                <div className='video' key={index} >
                    <div className="video__thumb play__icon">
                        <Link
                            to={`/video/${video.id.videoId}`}
                            style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})` }}>
                        </Link>
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

// 기본 props 설정
VideoView.defaultProps = {
    videos: [],
};

export default VideoView;
