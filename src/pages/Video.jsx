import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/api';
import ReactPlayer from 'react-player';

const Video = () => {
  const {videoId} = useParams();
  const [videoDetail,setVideoDetail] = useState(null);

  useEffect(()=> {
    fetchFromAPI(`videos?part=snippet, statistics&id=${videoId}`).then((data)=>{
      console.log(data)
      setVideoDetail(data.items[0])
    })
  },[videoId])

  return (
    <Main
      title="영상"
      discription="영상"
    >
      <section id='videoViewPage'>
        {videoDetail && (
        <div className='video__view'>
        <div className='video_play' style={{position:'relative', widows: '100%',paddingBottom: '56.25%'}}>
          <ReactPlayer
            playing={true}
            url={`https://www.youtube.com/watch?v=${videoId}`}
            width={'100%'}
            height={`100%`}
            style={{position:'absolute',top: 0, left: 0}}
          />
        </div>
        <div className='video_info'></div>
      </div>
        )}
      </section>
    </Main>
  )
}

export default Video