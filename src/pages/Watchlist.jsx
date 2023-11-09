import { useEffect, useState } from 'react'
import { getPopularMovieList } from '../api'
import LoadingScreen from '../components/LoadingScreen'
import SecondaryNavbar from '../components/SecondaryNavbar'
import Footer from './Footer'
import '/src/style/style.css'
import { useNavigate } from 'react-router-dom'

export default function Watchlist() {
    const [popularMovies, setPopularMovies] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getPopularMovieList().then((result) => {
            setPopularMovies(result);
        });
        console.log(popularMovies)
    }, [])
    return (
        <>
            <LoadingScreen />
            <SecondaryNavbar />
            <div className="watchlist">
                <div className="container">
                    <div className="thirdNavbar">
                        <h1>Your Watchlist(s)</h1>
                        <p>They are waiting for you!</p>
                    </div>
                    {popularMovies?.map((movie, i) => (
                        <div className="movieContainer" key={i}>
                            <img
                                src={movie.poster_path ? `${import.meta.env.VITE_REACT_BASEIMGURL}/${movie.poster_path}` : '../assets/imgNotFound.webp'}
                                alt={movie.title ? movie.title : movie.name}
                                title={movie.title ? movie.title : movie.name}
                                onClick={() => {
                                    navigate(`/movie-details/${movie.title ? 'movie' : 'tv'}/${movie.id}`)
                                }}
                            />
                            <div className="textSection">
                                <h3>{movie.title}</h3>
                                <p>{movie.release_date}</p>
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}