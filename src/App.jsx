import './style/style.css'
import { useState, useEffect } from 'react'
import Homepage from './pages/Homepage'
import Footer from './pages/Footer'
import Popular from './pages/Popular'
import TopRatedMovies from './pages/TopRatedMovies'
import TopRatedTV from './pages/TopRatedTV'
import Navbar from './components/Navbar'

export default function App() {
  // const [startSCreen, setStartScreen] = useState(false)

  // useEffect(() => {
  //   setStartScreen(true)
  //   setTimeout(() => {
  //     setStartScreen(false)
  //   }, 1200);
  // }, [])

  return (
    <div className="App">
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
      <Popular />
      <TopRatedMovies />
      <TopRatedTV />
      <Footer />
    </div>
  )
 }
