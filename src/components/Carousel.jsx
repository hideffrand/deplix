import '../style/style.css'
import { useNavigate, useParams } from 'react-router-dom'

export default function Carousel({ movies, setId, title, setReload }) {
    const { id } = useParams()
    const navigate = useNavigate()

    const MovieList = () => {
        return (
            <>
                {movies?.map((movie, i) => (
                    <div className="movie-container" key={i}>
                        <img
                            src={movie.poster_path ? `${import.meta.env.VITE_REACT_BASEIMGURL}/${movie.poster_path}` : '../assets/imgNotFound.webp'}
                            alt={movie.title ? movie.title : movie.name}
                            title={movie.title ? movie.title : movie.name}
                            onClick={() => {
                                setReload && window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                navigate(`/movie-details/${movie.id}`, {
                                    state: {
                                        movieId: movie.id,
                                        movieBackdropPath: movie.backdrop_path,
                                        movieTitle: movie.title,
                                        movieName: movie.name,
                                        moviePoster: movie.poster_path,
                                        movieOverview: movie.overview,
                                        movieReleaseDate: movie.release_date,
                                        movieVoteAverage: movie.vote_average,
                                        movieType: movie.title ? 'movie' :'tv',
                                    }
                                })
                                
                            }}
                        />
                        <div className="titleSection">
                            <p>{movie.title ? movie.title : movie.name}</p>
                            <div className="shadow"></div>
                        </div>
                        <div className="rateTag">
                            <span>
                                <ion-icon className='icon' name="star-sharp" style={{color: 'orange'}}></ion-icon>
                                {movie.vote_average.toFixed(1)}
                            </span>
                            <button title='Bookmark'><ion-icon className='icon' name="bookmark-outline"></ion-icon></button>
                        </div>
                    </div>
                ))}
            </>
        )
    }
    return (
        <div className="carousel" id={setId}>
            <div className="wrapper">
                <h1>{ title }</h1>
                <section>
                    <MovieList />
                </section>
            </div>
        </div>
    )
}