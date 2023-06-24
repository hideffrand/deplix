import '/src/style/style.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getTopRatedTVList } from '/src/api'

export default function TopRatedTV() {
    const navigate = useNavigate()

    const TopRatedTVList = () => {
        const [TopRatedTV, setTopRatedTV] = useState([])
        useEffect(()=> {
            getTopRatedTVList().then((result) => {
                setTopRatedTV(result)
            })
        }, [])
        return (
            <>
                {TopRatedTV?.map((movie, i) => (
                    <div className="movie-container" key={i} onClick={() => navigate('/movie-details', {
                        state: {
                            movieId: movie.id,
                            movieBackdropPath: movie.backdrop_path,
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
            <div className="outer" id="topRatedTV">
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