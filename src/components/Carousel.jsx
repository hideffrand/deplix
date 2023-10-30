import '../style/style.css'
import { useNavigate } from 'react-router-dom'

export default function Carousel({ movies, setDivId, title }) {
    const navigate = useNavigate()
    return (
        <div className="carousel" id={setDivId}>
            <div className="wrapper">
                <h1>{ title }</h1>
                <section>
                    {movies?.map((movie, i) => (
                        <div className="movie-container" key={i}>
                            <img
                                src={movie.poster_path ? `${import.meta.env.VITE_REACT_BASEIMGURL}/${movie.poster_path}` : '../assets/imgNotFound.webp'}
                                alt={movie.title ? movie.title : movie.name}
                                title={movie.title ? movie.title : movie.name}
                                onClick={() => {
                                    navigate(`/movie-details/${movie.title ? 'movie' : 'tv'}/${movie.id}`)
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
                </section>
            </div>
        </div>
    )
}