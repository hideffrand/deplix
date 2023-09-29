import './style/style.css'
import { useState, useEffect } from 'react'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'
import Carousel from './components/Carousel'
import { getPopularMovieList, getTopRatedList, getUpcomingList } from '/src/api'

export default function App() {
  const [popularMovies, setPopularMovies] = useState([])
  const [TopRatedMovies, setTopRatedMovies] = useState([])
  const [TopRatedTV, setTopRatedTV] = useState([])
  const [upcomingList, setUpcomingList] = useState([])
  
  useEffect(() => {
    // generateGuestSession().then((result) => {
    //   // console.log(result)
    //   localStorage.setItem('guestSessionId', result.guest_session_id)
    //   const guestSessionId = window.localStorage.getItem('guestSessionId')
    //   console.log(guestSessionId)
    // })
    // localStorage.setItem('fakeId', Math.random())
    document.title = 'Deplix - Watch Movies Online'
    getPopularMovieList().then((result) => {
      setPopularMovies(result)
    })
    getTopRatedList('movie').then((result) => {
      setTopRatedMovies(result)
    })
    getTopRatedList('tv').then((result) => {
      setTopRatedTV(result)
    })
    getUpcomingList().then((result) => {
      setUpcomingList(result)
    })
  }, [])

  // const [startSCreen, setStartScreen] = useState(false)

  // useEffect(() => {
  //   setStartScreen(true)
  //   setTimeout(() => {
  //     setStartScreen(false)
  //   }, 1200);
  // }, [])

  return (
    <>
      {/* <div className="startScreen" style={{
          display: startSCreen ? 'flex' : 'none'
        }}>
        <h1>DEPLIX</h1>
        <div className="lineLoaderContainer">
            <div className="lineLoader"></div>
        </div>
      </div> */}
      <Navbar />
      <Homepage />
      <Carousel movies={(popularMovies)} setId={'popular'} title={'Popular Movies'} setReload={false} />
      <Carousel movies={(TopRatedMovies)} setId={'topRatedMovies'} title={'Top Rated Movies'} setReload={false} />
      <Carousel movies={(TopRatedTV)} setId={'TopRatedTV'} title={'Top Rated TV'} setReload={false} />
      <Carousel movies={(upcomingList)} setId={'upcoming'} title={'Upcoming'} setReload={false} />
      <Footer />
    </>
  )
 }
