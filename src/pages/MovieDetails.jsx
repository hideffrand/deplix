import '/src/style/style.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'

export default function MovieDetails() {
    const navigate = useNavigate()
    const [handleSidebar, setHandleSidebar] = useState('')
    
    const location = useLocation()
    const movieId = location.state.movieId
    const movieBackdropPath = location.state.movieBackdropPath
    const movieBackdropPathUrl = `${import.meta.env.VITE_REACT_BASEIMGURL}/${movieBackdropPath}`
    const movieTitle = location.state.movieTitle
    const movieName = location.state.movieName
    const moviePoster = location.state.moviePoster
    const movieOverview = location.state.movieOverview
    const movieReleaseDate = location.state.movieReleaseDate
    const movieVoteAverage = location.state.movieVoteAverage
    const movieTrailerLink = `https://www.youtube.com/results?search_query=${movieTitle}`

    return (
        <>
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
                        <h3>Top Rated</h3>
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
            <div className="movieDetails" style={{
                backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 2), rgba(255, 255, 255, 0.05)), url(${movieBackdropPathUrl})`
            }}>
                <div className="container">
                    <img src={`${import.meta.env.VITE_REACT_BASEIMGURL}/${moviePoster}`} alt="" />
                    <section>
                        <h1>{movieTitle}</h1>
                        <h1>{movieName}</h1>
                        <p id='movieOverview'>{movieOverview}</p>
                        <p id='movieReleaseDate'>Release date: {movieReleaseDate}</p>
                        <p>Ratings: {movieVoteAverage}</p>
                        <div className="voteAverageContainer">
                            <div className="voteAverageCover">
                                <div className="voteAverage" style={{
                                    width: `${movieVoteAverage * 10}%`
                                }}></div>
                            </div>
                        </div>
                        <div className="menus">
                            <span>
                                <a href={movieTrailerLink}>Trailer</a>
                                <button id='watchListButton' onClick={() => navigate('/watchlist', {
                                    state: {
                                        
                                    }
                                })}>Add to Watchlist</button>
                            </span>
                            <button id='playButton'>Watch<ion-icon id='icon'name="play"></ion-icon></button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}