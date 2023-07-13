import '/src/style/style.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getUpcomingList } from '/src/api'

export default function Upcoming() {
    const navigate = useNavigate()

    const UpcomingList = () => {
        const [upcomingList, setUpcomingList] = useState([])
        useEffect(()=> {
            getUpcomingList().then((result) => {
                setUpcomingList(result)
            })
        }, [])
        return (
            <>
                {upcomingList?.map((movie, i) => (
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
        <div className="outer" id="upcoming">
            <div className="wrapper">
                <h1>Upcoming</h1>
                <section>
                    <UpcomingList />
                </section>
            </div>
        </div>
    )
}