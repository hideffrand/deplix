import '/src/style/style.css'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { searchMovie } from '/src/api'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

export default function Discover() {
    const navigate = useNavigate()
    const location = useLocation()
    const movieName = location.state.movieName

    const [movieList, setMovieList] = useState([])
    const [handleSidebar, setHandleSidebar] = useState('')

    
    const searchMovieResult = async (q) => {
        const query = await searchMovie(q)
        return query
    }
    useEffect(()=> {
        searchMovieResult(movieName).then((result) => {
            setMovieList(result)
        })
    }, [])
    console.log(movieList)


    const MovieListResult = () => {
        return (
            <>
                {movieList?.map((movie, i) => (
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
                    </div>
                ))}
            </>
        )
    }

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
            <div className="discover">
                <div className="outer" id="top-rated-movies">
                    <div className="wrapper">
                        <h1>Discover</h1>
                        <section>
                            <MovieListResult />
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}