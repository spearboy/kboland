import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { useParams } from 'react-router-dom'
import Videosearch from '../components/video/Videosearch';
import { fetchFromAPI } from '../utils/api';

const Search = () => {const { searchId } = useParams();
  const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=48&q=${searchId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
  //   .then(response => response.json())
  //   .then(result => {
  //     console.log(result);
  //     setVideos(result.items);
  //   })
  // }, [searchId]);
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&type=video&q=${searchId}`)
    .then((data)=>setVideos(data.items))
  },[searchId])
  return (
    <Main title='유튜브 검색' discription='유튜브 검색 결과 페이지 입니다.'>
      <section id='searchPage'>
        <div className="video__inner search">
          <Videosearch videos={videos}/>
        </div>
      </section>
    </Main>
  )
}

export default Search