import '/src/style/style.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchMovie } from '/src/api'

export default function Discover() {
    const navigate = useNavigate()

    const [searchResult, setSearchResult] = useState([])

    useEffect(()=> {
        setSearchResult([])
    }, [])
    
    const search = async (q) => {
        if (q.length > 2) {
            const query = await searchMovie(q)
            setSearchResult(query.results)
        } else {
            setSearchResult([])
        }
    }

    const SearchResultList = () => {
        return (
            <>
                {searchResult?.map((movie, i) => (
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
        <div className="discover">
            <div className="container">
                <h1>Discover</h1>
                <div className="search-bar">
                    <input
                        id='search'
                        type="text"
                        placeholder='Search...'
                        autoComplete='off'
                        autoFocus
                        onChange={(e) => search(e.target.value)}
                    />
                    <ion-icon id='searchIcon'name="search"></ion-icon>
                </div>
            </div>
            <div className="wrapper">
                <section>
                    <SearchResultList />
                </section>
            </div>
        </div>
    )
}