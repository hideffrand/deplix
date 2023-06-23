import App from './App'
import Login from './pages/Login'
import Signup from './pages/Signup'
import MovieDetails from './pages/MovieDetails'
import Watchlist from './pages/Watchlist'
import Discover from './pages/Discover'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Root() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/movie-details" element={<MovieDetails />} />
                <Route path="/watchlist" element={<Watchlist />} />
                <Route path="/discover" element={<Discover />} />
            </Routes>
        </BrowserRouter>
    )
}