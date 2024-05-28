import React,{Suspense, lazy} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Main = lazy(()=> import ('./components/section/Main'))
const Home = lazy(()=> import ('./pages/Home'))
const Kbo = lazy(()=> import ('./pages/Kbo'))
const Lg = lazy(()=> import ('./pages/Lg'))
const Kt = lazy(()=> import ('./pages/Kt'))
const Ssg = lazy(()=> import ('./pages/Ssg'))
const Nc = lazy(()=> import ('./pages/Nc'))
const Dusan = lazy(()=> import ('./pages/Dusan'))
const Kia = lazy(()=> import ('./pages/Kia'))
const Lotte = lazy(()=> import ('./pages/Lotte'))
const Samsung = lazy(()=> import ('./pages/Samsung'))
const Hanhua = lazy(()=> import ('./pages/Hanhua'))
const Kiwoom = lazy(()=> import ('./pages/Kiwoom'))
const Not = lazy(()=> import ('./pages/Not'))
const Video = lazy(()=> import ('./pages/Video'))
const Search = lazy(()=> import ('./pages/Search'))
const Channel = lazy(()=> import ('./pages/Channel'))


const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<Main />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/kbo' element={<Kbo/>}/>
          <Route path='/lg' element={<Lg/>}/>
          <Route path='/kt' element={<Kt/>}/>
          <Route path='/ssg' element={<Ssg/>}/>
          <Route path='/nc' element={<Nc/>}/>
          <Route path='/dosan' element={<Dusan/>}/>
          <Route path='/kia' element={<Kia/>}/>
          <Route path='/lotte' element={<Lotte/>}/>
          <Route path='/samsung' element={<Samsung/>}/>
          <Route path='/hanhwa' element={<Hanhua/>}/>
          <Route path='/kiwoom' element={<Kiwoom/>}/>
          <Route path='/channel/:channelId' element={<Channel/>}/>
          <Route path='/video/:videoId' element={<Video/>}/>
          <Route path='/search/:searchId' element={<Search/>}/>
          <Route path='*' element={<Not />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App