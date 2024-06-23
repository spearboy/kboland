import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import { homeDetails, legend40 } from "../data/home";
import { Link } from 'react-router-dom';

const getRandomTeam = (teams) => {
  if (teams.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * teams.length);
  return teams[randomIndex];
}

const Home = () => {
  const randomTeam = getRandomTeam(homeDetails);
  const [news, setNews] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      // const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY_NEWS;
      // console.log('API Key:', apiKey);  // 환경 변수가 올바르게 로드되었는지 확인

      // if (!apiKey) {
      //   console.error("API key is missing");
      //   // 로컬 news.json 파일에서 데이터 가져오기
      //   try {
      //     const localResponse = await fetch('/src/data/news.json');
      //     if (!localResponse.ok) {
      //       throw new Error(`HTTP error! status: ${localResponse.status}`);
      //     }
      //     const localData = await localResponse.json();
      //     setNews(localData.articles);
      //     console.log(localData);
      //   } catch (localError) {
      //     console.error("Error fetching the local news:", localError);
      //   }
      //   return;
      // }

      // const url = `https://newsapi.org/v2/everything?q=KBO OR 한국 야구&language=ko&pageSize=5&apiKey=${apiKey}`;

      // try {
      //   const response = await fetch(url);
      //   if (!response.ok) {
      //     throw new Error(`HTTP error! status: ${response.status}`);
      //   }
      //   const data = await response.json();
      //   if (!data.articles) {
      //     throw new Error("Invalid response structure");
      //   }
      //   setNews(data.articles);
      //   console.log(data);
      // } catch (error) {
      //   console.error("Error fetching the news:", error);
      //   // 로컬 news.json 파일에서 데이터 가져오기
      //   try {
      //     const localResponse = await fetch('/src/data/news.json');
      //     if (!localResponse.ok) {
      //       throw new Error(`HTTP error! status: ${localResponse.status}`);
      //     }
      //     const localData = await localResponse.json();
      //     setNews(localData.articles);
      //     console.log(localData);
      //   } catch (localError) {
      //     console.error("Error fetching the local news:", localError);
      //   }
      // }
      
      try {
        const localResponse = await fetch('/src/data/news.json');
        if (!localResponse.ok) {
          throw new Error(`HTTP error! status: ${localResponse.status}`);
        }
        const localData = await localResponse.json();
        setNews(localData.articles);
        console.log(localData);
      } catch (localError) {
        console.error("Error fetching the local news:", localError);
      }
    };

    fetchNews();
  }, []);

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
  };

  return (
    <Main title="메인" description="KBO LAND 메인">
      <div className='content_wrapper'>
        <h3>오늘의 소개팀!</h3>
        {randomTeam ? (
          <div className='team_info_wrapper'>
            <div className='team_logo_wrapper'>
              <img src={randomTeam.teamLogo} alt={randomTeam.teamName} />
              <p>{randomTeam.teamName}</p>
            </div>
            <div className='content'>
              {randomTeam.teamText}
            </div>
          </div>
        ) : (
          <p>팀 정보를 불러올 수 없습니다.</p>
        )}
      </div>
      <div className='content_wrapper'>
        <div className='team_wrapper'>
          <h3>KBO 전체 구단</h3>
          <div className='team_content_wrap'>
            {homeDetails.map((team, key) => (
              <div 
                className={`team_content ${selectedTeam && selectedTeam.teamName === team.teamName ? 'active' : ''}`} 
                key={key} 
                onClick={() => handleTeamClick(team)}
              >
                <img src={team.teamLogo} alt={team.teamName} />
                <p>{team.teamName}</p>
              </div>
            ))}
          </div>
          {selectedTeam && (
            <div className='home_play_area'>
              <img src={selectedTeam.teamLogo} alt={selectedTeam.teamName} />
              <p className='title'>{selectedTeam.teamName}</p>
              <div>
                <p>홈구장: {selectedTeam.homeStadiumName}</p>
                <p>홈구장 위치: {selectedTeam.homeStadiumLocation}</p>
                <p>홈구장 수용인원: {selectedTeam.homeStadiumCapacity}</p>
                <p>팀 우승년도: {Array.isArray(selectedTeam.teamChampionship) ? selectedTeam.teamChampionship.map((year, index) => (
                  <span key={index}>{year}</span>
                )) : selectedTeam.teamChampionship}</p>
                <p>{selectedTeam.teamText}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='content_wrapper'>
        <h3>최신 뉴스</h3>
        <div className='news_wrapper'>
          {news.length > 0 ? (
            news.map((article, index) => (
              <Link key={index} className='news_article' to={article.url} rel='noopener noreferrer' target='_blank'>
                <h4>{article.title}</h4>
                <p>{article.description}</p>
              </Link>
            ))
          ) : (
            <p>뉴스를 불러오는 중...</p>
          )}
        </div>
      </div>
      <div className='content_wrapper'>
        <h3>KBO 레전드 40</h3>
        <div className='legend40_wrapper'>
          {legend40.map((legend, index) => (
            <div key={index} className='legend40_content'>
              <img src={legend.legendImg} alt={legend.legendName} />
              <p className='nick'>{legend.legendNickname}</p>
              <h4>{legend.legendName}</h4>
            </div>
          ))}
        </div>
      </div>
    </Main>
  );
}

export default Home;
