import '/src/style/style.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getPopularMovieList, getTopRatedMovieList, getTopRatedTVList } from '/src/api'
import Searchbar from '../components/Searchbar'

export default function MovieChoice() {
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

    const TopRatedMovieList = () => {
        const [TopRatedMovies, setTopRatedMovies] = useState([])
        useEffect(()=> {
            getTopRatedMovieList().then((result) => {
                setTopRatedMovies(result)
            })
        }, [])
        return (
            <>
                {TopRatedMovies?.map((movie, i) => (
                <div className="movie-container" key={i} onClick={() => navigate('/movie-details', {
                        state: {
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

    const TopRatedTVList = () => {
        const [TopRatedTV, setTopRatedTV] = useState([])
        useEffect(()=> {
            getTopRatedTVList().then((result) => {
                setTopRatedTV(result)
            })
        }, [])
        console.log(TopRatedTV)
        return (
            <>
                {TopRatedTV?.map((movie, i) => (
                    <div className="movie-container" key={i} onClick={() => navigate('/movie-details', {
                        state: {
                            movieTitle: movie.name,
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
        <>
            <div className="outer" id="popular">
                <div className="wrapper">
                    <div className="title">
                        <h1>Popular Movies</h1>
                        <Searchbar />
                    </div>
                    <section>
                        <PopularMovieList />
                    </section>
                </div>
            </div>
            <div className="outer" id="top-rated-movies">
                <div className="wrapper">
                    <h1>Top Rated Movies</h1>
                    <section>
                        <TopRatedMovieList />
                    </section>
                </div>
            </div>
            <div className="outer" id="top-rated-tv">
                <div className="wrapper">
                    <h1>Top Rated TV Shows</h1>
                    <section>
                        <TopRatedTVList />
                    </section>
                </div>
            </div>
        </>
    )
}