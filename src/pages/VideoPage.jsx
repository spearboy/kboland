import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'

import { Link, useParams } from 'react-router-dom';
import Loading from '../components/section/Loading';
import ReactPlayer from 'react-player';

import { CiChat1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiRead } from "react-icons/ci";

const VideoPage = () => {
  const { videoID } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
        const data = await response.json();

        setVideoDetail(data.items[0]);
        console.log(data);

        setTimeout(() => {
            setLoading(false);
        }, 600);
      } catch (error) {
        console.log(error);
        setTimeout(() => {
            setLoading(false);
        }, 600);
      }
    };


    const fetchComments = async () => {
      try {
          const response = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoID}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`);
          const data = await response.json();
          setComments(data.items);
          setLoading(false);
          console.log(data);
      } catch (error) {
          console.log(error);
          setLoading(false);
      }
  };
  fetchVideoDetails();
  fetchComments();
  }, [videoID]);

  return (
    <Main title="영상" description="영상">
      {loading ? (
        <Loading />
      ) : (
        videoDetail && (
        <section id="videoViewPage">
            <div className="video__view">
              <div className="video_play">
                <ReactPlayer
                  playing={true}
                  url={`https://www.youtube.com/watch?v=${videoID}`}
                  width="100%"
                  height="100%"
                  controls={true}
                  style={{ position: 'absolute', top: 0, left: 0 }}
                />
                <div className='video_comment'>
                  <h3>Comments</h3>
                  {comments.length > 0 ? (
                      <ul>
                          {comments.map(comment => (
                              <li key={comment.id}>
                                  <p dangerouslySetInnerHTML={{ __html: comment.snippet.topLevelComment.snippet.textDisplay }} />
                              </li>
                          ))}
                      </ul>
                  ) : (
                      <p>No comments available.</p>
                  )}
                </div>
              </div>
            </div>
            
            <div className='video__info'>
              <h2 className='title'>{videoDetail.snippet.title}</h2>
              <div className='channel'>
                <div>
                  <Link to={`/channel/${videoDetail.snippet.channelId}`} className='channelTitle'>{videoDetail.snippet.channelTitle}</Link>
                </div>
                <div>
                  <span className='view'><CiRead />{videoDetail.statistics.viewCount}</span>
                  <span className='like'><CiStar />{videoDetail.statistics.likeCount}</span>
                  <span className='comment'><CiChat1 />{videoDetail.statistics.commentCount}</span>
                </div>
              </div>
            </div>
            <div className="video__desc">
              {videoDetail.snippet.description}
            </div>

        </section>
          )
      )}
    </Main>
  );
};

export default VideoPage;
