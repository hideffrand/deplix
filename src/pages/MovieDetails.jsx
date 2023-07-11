import '/src/style/style.css'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function MovieDetails() {
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

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, [])
    return (
        <>
            <div className="movieDetails" style={{
                backgroundImage: loading ? `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(25, 25, 25, 1)` : `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 0)), url(${movieBackdropPathUrl})`
            }}>
                <div className="movieDetailsContainer">
                    <div className="imgSection">
                        <img src={`${import.meta.env.VITE_REACT_BASEIMGURL}/${moviePoster}`} alt={`Poster ${movieTitle ? movieTitle : movieName}`} />
                    </div>
                    <div className="textSection">
                        <h1>{movieTitle ? movieTitle : movieName}</h1>
                        <p id='movieOverview'>{movieOverview}</p>
                        <p id='movieReleaseDate'>Release date: {movieReleaseDate}</p>
                        <p>Ratings: {movieVoteAverage}</p>
                        <div className="voteAverageContainer">
                            <div className="voteAverageCover">
                                <div
                                    className="voteAverage"
                                    style={{
                                    width: `${movieVoteAverage * 10}%`
                                    }}
                                ></div>
                            </div>
                        </div>
                        <a href={movieTrailerLink}>Watch Trailer</a>
                        <section id="buttonSection">
                            <button id='addButton'>Add to watchlist</button>
                            <button id='playNowButton'>Play now</button>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}