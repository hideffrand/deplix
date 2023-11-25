import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import MovieDetails from './pages/MovieDetails'
import Watchlist from './pages/Watchlist'
import Discover from './pages/Discover'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProfilePage from './pages/ProfilePage'

export default function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/movie-details/:type/:id" element={<MovieDetails />} />
                    <Route path="/watchlist" element={<Watchlist />} />
                    <Route path="/discover" element={<Discover />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}