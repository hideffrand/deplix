import './style/style.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Homepage from './pages/Homepage'
import MovieChoice from './pages/MovieChoice'
import Footer from './pages/Footer'

export default function App() {
  const [handleSidebar, setHandleSidebar] = useState('')
  
  return (
    <>
      {
        handleSidebar == 'sidebar' &&
        <div className="Sidebar">
          <button onClick={() => setHandleSidebar('')}>
              <ion-icon id='icon' name="close-outline"></ion-icon>
          </button>
          <Sidebar />
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
      <MovieChoice />
      <Footer />
    </>
  )
 }
