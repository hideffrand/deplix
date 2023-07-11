import '/src/style/style.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getPopularMovieList } from '/src/api'

export default function Popular() {
    const navigate = useNavigate()

    const PopularMovieList = () => {
        const [popularMovies, setPopularMovies] = useState([])
        useEffect(()=> {
            getPopularMovieList().then((result) => {
                setPopularMovies(result)
            })
        }, [])
        return (
            <>
                {popularMovies?.map((movie, i) => (
                    <div className="movie-container" key={i} onClick={() => navigate('/movie-details', {
                        state: {
                            movieId: movie.id,
                            movieBackdropPath: movie.backdrop_path,
                            movieTitle: movie.title,
                            movieName: movie.name,
                            moviePoster: movie.poster_path,
                            movieOverview: movie.overview,
                            movieReleaseDate: movie.release_date,
                            movieVoteAverage: movie.vote_average
                        }
                    })}>
                        <img src={`${import.meta.env.VITE_REACT_BASEIMGURL}/${movie.poster_path}`} alt="" />
                        {/* <p>{ movie.title }</p> */}
                    </div>
                ))}
            </>
        )
    }
    return (
        <div className="outer" id="popular">
            <div className="wrapper">
                <h1>Popular Movies</h1>
                <section>
                    <PopularMovieList />
                </section>
            </div>
        </div>
    )
}