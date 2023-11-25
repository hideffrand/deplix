import { useEffect, useState } from 'react'
import { getPopularMovieList } from '../api'
import LoadingScreen from '../components/LoadingScreen'
import SecondaryNavbar from '../components/SecondaryNavbar'
import Footer from './Footer'
import Image from '../components/Image'
import '/src/style/style.css'
import { useNavigate } from 'react-router-dom'


export default function Watchlist() {
    const [popularMovies, setPopularMovies] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
                        <div
                            className="movieContainer"
                            key={i}
                            onClick={() => {navigate(`/movie-details/${movie.title ? 'movie' : 'tv'}/${movie.id}`)
                            }}>
                            <Image url={movie.poster_path} title={movie.title} name={movie.name}/>
                            <div className="textSection">
                                <h3>{movie.title}</h3>
                                <p>{movie.release_date}</p>
                                <p>{movie.overview}</p>
                                <div className="buttons">
                                    <button className='userBtn'>Play Now</button>
                                    <button>Remove from Watchlist</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}