import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { useParams } from 'react-router-dom'
import Loading from '../components/section/Loading';
import VideoView from '../components/section/VideoView';

const SearchPage = () => {
    const { searchID } = useParams();
    const [videos, setVideos] = useState([]);
    const [nextPageToken, setNextPageToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVideos = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&type=video&q=${searchID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY_TWO}`)
                const data = await response.json();
                setVideos(data.items);
                // console.log(data);

                // 최소 로딩 소스 1초 유지
                setTimeout(() => {
                    setLoading(false);
                }, 1000);

            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchVideos();
    }, [searchID])

    const loadMoreVideos = async () => {
        if(nextPageToken){
            const nextVideo = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&type=video&q=${searchID}&order=date&pageToken=${nextPageToken}&maxResults=48&key=${process.env.REACT_APP_YOUTUBE_API_KEY_TWO}`)
            const nextVideoData = await nextVideo.json();
            console.log(nextVideoData)
            setVideos(prevVideos => [...prevVideos,...nextVideoData.items])
            setNextPageToken(nextVideoData.nextPageToken)
        }
    }
    return (
        <Main
            title={`KBO LAND 검색 : ${searchID}`}
            description={`검색 키워드 : ${searchID}`}
        >
            {loading ? (
                <Loading />
            ) : (
                <section id='searchPage' className='fade-in'>
                    <h2>🤪 <em>{searchID}</em>를 검색한 결과입니다.</h2>
                    <div className="video__inner">
                        <VideoView videos={videos} />
                    </div>

                    <div className='channel__more'>
                            {nextPageToken && (
                                <button onClick={loadMoreVideos}></button>
                            )}
                        </div>
                </section>
            )}
        </Main>
    )
}

export default SearchPage