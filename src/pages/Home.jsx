
import React from 'react'
import Main from '../components/section/Main'

import LgContent from '../components/contents/LgContent'
import SsgContent from '../components/contents/SsgContent'
import SamsungContent from '../components/contents/SamsungContent'
import KtContent from '../components/contents/KtContent'
import KboContent from '../components/contents/KboContent'
import NcContent from '../components/contents/NcContent'
import DusanContent from '../components/contents/DusanContent'
import KiaContent from '../components/contents/KiaContent'
import LotteContent from '../components/contents/LotteContent'
import HanhuaContent from '../components/contents/HanhuaContent'
import KiwoomContent from '../components/contents/KiwoomContent'

import {ssgLanders} from '../data/Ssg'
import {ktWiz} from '../data/Kt'
import {samsungLions} from '../data/Samsung'
import {kiaTigers} from '../data/Kia'
import {kiwoomHeroes} from '../data/Kiwoom'
import {kboLeague} from '../data/Kbo'
import {lgTwins} from '../data/Lg'
import {dusanBears} from '../data/Dusan'
import {ncDinos} from '../data/Nc'
import {hanhwaEagles} from '../data/Hanhwa'
import {lotteGiants} from '../data/Lotte'
import Videoslider from '../components/video/Videoslider'

const Home = () => {
  return (
    <Main title="메인" discription="KBO Youtube 메인">

      <Videoslider videos={kboLeague} id='kboLeague' title='KBO 리그'/>
      <Videoslider videos={lgTwins} id='lgTwins' title='LG 트윈스'/>
      <Videoslider videos={dusanBears} id='dusanBears' title='DOSAN 베어스'/>
      <Videoslider videos={ncDinos} id='ncDinos' title='NC 다이노스'/>
      <Videoslider videos={hanhwaEagles} id='hanhwaEagles' title='HANHWA 이글스'/>
      <Videoslider videos={lotteGiants} id='lotteGiants' title='LOTTE 자이언츠'/>
      <Videoslider videos={ssgLanders} id='ssgLanders' title='SSG 랜더스'/>
      <Videoslider videos={ktWiz} id='ktWiz' title='KT 위즈'/>
      <Videoslider videos={samsungLions} id='samsungLions' title='SAMSUNG 라이온즈'/>
      <Videoslider videos={kiaTigers} id='kiaTigers' title='KIA 타이거즈'/>
      <Videoslider videos={kiwoomHeroes} id='kiwoomHeroes' title='KIWOOM 히어로즈'/>

    </Main>
  )
}

export default Home