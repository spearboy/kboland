# youtube API를 이용한 음악 사이트
- KBO를 즐기는 사용자로서, YouTube API를 활용하여 각종 하이라이트 영상 및 경기 영상을 볼 수 있는 사이트를 구축하기로 했습니다. 이를 위해 다음과 같은 작업 절차를 따르며, 필요한 라이브러리를 설치하고 트러블 슈팅을 해나갔습니다.

## 작업 순서
1. node.js 설치 / 버전 확인
2. 폴더 세팅 : 필요없는 파일 제거

## 필요한 라이브러리 설치
- react설치 `npm create-react-app 폴더이름` : 폴더를 생략하고 싶으면 . 으로 대체
- react-router-dom 설치 `npm install react-router-dom` : 주소를 설정하기 위한 라이브러리
- axios 설치 `npm install axios` : API 라이브러리
- react-icon 설치 `npm install react-icons` : 리액트에 필요한 아이콘
- react-player 설치 `npm install react-player` : 유튜브 영상 재생
- sass 설치 `npm install sass` : css 라이브러리 sass 설치
- react-helmet-async 설치 `npm install react-helmet-async` : React 앱의 HTML 헤드를 관리
- swiper 설치 `npm install swiper` : 이미지 슬라이드

## 사용 스텍
- node.js 설치

## 트러블 슈팅
- node.js 설치시 폴더 인식 에러:
    - 에러 경로에 타겟 폴더 생성 