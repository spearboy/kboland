# KBO 동영상 사이트 구축: YouTube API 활용

KBO 리그의 하이라이트 영상과 경기 영상을 쉽게 볼 수 있는 사이트를 구축하기 위해, YouTube API를 활용하여 사용자에게 편리한 서비스를 제공하고자 합니다. 다음은 사이트를 구축하는 과정에서 필요한 작업 절차와 사용된 기술 스택, 트러블 슈팅에 관한 상세한 설명입니다.

## 작업 순서
1. Node.js 설치 및 버전 확인
2. 프로젝트 폴더 설정 및 필요없는 파일 제거

## 필요한 라이브러리 설치
- React 설치: `npm create-react-app .` (현재 폴더에 설치)
- react-router-dom 설치: `npm install react-router-dom` (주소 설정 라이브러리)
- axios 설치: `npm install axios` (API 호출 라이브러리)
- react-icons 설치: `npm install react-icons` (리액트 아이콘)
- react-player 설치: `npm install react-player` (유튜브 영상 재생 라이브러리)
- sass 설치: `npm install sass` (CSS 전처리기)
- react-helmet-async 설치: `npm install react-helmet-async` (React 앱의 HTML 헤드 관리)
- swiper 설치: `npm install swiper` (이미지 슬라이드 라이브러리)

## 사이트 프리뷰
![image](https://github.com/spearboy/kboland/assets/95023009/48fa5d6b-cfbc-4cc8-bc8b-8d3d89680a2a)   
![image](https://github.com/spearboy/kboland/assets/95023009/51360857-c8d1-4c7b-a84e-e1c29cd43d64)   
![image](https://github.com/spearboy/kboland/assets/95023009/cb0c49ec-4f55-4972-8d4b-5071e75f113a)   
![image](https://github.com/spearboy/kboland/assets/95023009/8616f5b7-b2b3-4369-8498-5c759e034c3b)   

## 사이트 간단 설명
메인 페이지에서는 각 팀별 정보와 간단한 한국 야구 관련 뉴스를 제공하며, KBO 40주년 기념 레전드 40인을 소개합니다. 메뉴 항목과 키워드를 통해 관련 팀 및 키워드에 관한 영상을 쉽게 검색할 수 있습니다.

## 사용 API
- YouTube API
- News API

## 사용 스택
- Node.js
- React.js

## 트러블 슈팅
- Node.js 설치 시 폴더 인식 에러 발생:
    - 에러 경로에 타겟 폴더를 생성하여 문제 해결
