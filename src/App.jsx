import './style/style.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './pages/Footer'
import Popular from './pages/Popular'
import TopRatedMovies from './pages/TopRatedMovies'
import TopRatedTV from './pages/TopRatedTV'

export default function App() {
  const [handleSidebar, setHandleSidebar] = useState('')
  
  return (
    <div className="App">
      {
        handleSidebar == 'sidebar' &&
        <div className="Sidebar">
          <button onClick={() => setHandleSidebar('')}>
              <ion-icon id='icon' name="close-outline"></ion-icon>
          </button>
          <div className="menu-container">
              <section>
                  <h1>Search Movies</h1>
                  <a href="#popular">Popular</a>
                  <a href="#topRatedMovies">Top Rated Movies</a>
                  <a href="#topRatedTV">Top Rated TV</a>
              </section>
              <section>
                  <h1>Help & Supports</h1>
                  <a href="">Terms and Conditions</a>
                  <a href="">Contact Support</a>
              </section>
          </div>
        </div>
      }
      <nav>
        <section>
          <button onClick={() => setHandleSidebar('sidebar')}><ion-icon name="menu"></ion-icon></button>
          <h1>DEPLIX</h1>
        </section>
        <Navbar />
      </nav>
      <Homepage />
      <Popular />
      <TopRatedMovies />
      <TopRatedTV />
      <Footer />
    </div>
  )
 }
