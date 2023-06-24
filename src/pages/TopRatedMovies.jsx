import '/src/style/style.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getTopRatedMovieList } from '/src/api'

export default function TopRatedMovies() {
    const navigate = useNavigate()

    const [TopRatedMovies, setTopRatedMovies] = useState([])
    useEffect(()=> {
        getTopRatedMovieList().then((result) => {
            setTopRatedMovies(result)
        })
    }, [])
    const TopRatedMovieList = () => {
        return (
            <>
                {TopRatedMovies?.map((movie, i) => (
                <div className="movie-container" key={i} onClick={() => navigate('/movie-details', {
                        state: {
                            movieId: movie.id,
                            movieBackdropPath: movie.backdrop_path,
                            movieTitle: movie.title,
                            moviePoster: movie.poster_path,
                            movieOverview: movie.overview,
                            movieReleaseDate: movie.release_date,
                            movieVoteAverage: movie.vote_average
                        }
                    })}>
                        <img src={`${import.meta.env.VITE_REACT_BASEIMGURL}/${movie.poster_path}`} alt="" />
                    </div>
                ))}
            </>
        )
    }
    return (
        <div className="outer" id="topRatedMovies">
            <div className="wrapper">
                <h1>Top Rated Movies</h1>
                <section>
                    <TopRatedMovieList />
                </section>
            </div>
        </div>
    )
}