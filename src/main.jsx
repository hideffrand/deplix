import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MovieDetails from './pages/MovieDetails'
import Watchlist from './pages/Watchlist'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/movie-details" element={<MovieDetails />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
