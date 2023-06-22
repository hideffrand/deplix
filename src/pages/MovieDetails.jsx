import '/src/style/style.css'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function MovieDetails() {
    const [handleSidebar, setHandleSidebar] = useState('')
    
    const location = useLocation()
    const movieTitle = location.state.movieTitle
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
            <div className="movieDetails">
                <div className="container">
                    <img src={`${import.meta.env.VITE_REACT_BASEIMGURL}/${moviePoster}`} alt="" />
                    <section>
                        <h1>{movieTitle}</h1>
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
                                <a href={movieTrailerLink}>Watch Trailer</a>
                                <button id='watchListButton'>Add to Watchlist</button>
                            </span>
                            <button id='playButton'>Watch<ion-icon id='icon'name="play"></ion-icon></button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}