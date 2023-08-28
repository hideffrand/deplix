import '/src/style/style.css'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchMovie } from '/src/api'
import SecondaryNavbar from '../components/SecondaryNavbar'

export default function Discover() {
    const navigate = useNavigate()

    const [searchResult, setSearchResult] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    const debounce = (func, delay) => {
        let timer
        return function (...args) {
            clearTimeout(timer)
            timer = setTimeout(() => func(...args), delay)
        }
    }

    const debouncedSearch = debounce(async (q) => {
        if (q.length > 3) {
            const query = await searchMovie(q)
            setSearchResult(query.results)
        } else {
            setSearchResult([])
        }
    }, 300)

    const handleSearchInputChange = (e) => {
        const inputValue = e.target.value
        setSearchQuery(inputValue)
        debouncedSearch(inputValue)
    }

    const SearchResultList = () => {
        return (
            <>
                {searchResult?.map((movie, i) => (
                    <div className="movie-container" key={i} onClick={() => navigate(`/movie-details/:${movie.id}`, {
                        state: {
                            movieId: movie.id,
                            movieBackdropPath: movie.backdrop_path,
                            movieTitle: movie.title,
                            movieName: movie.name,
                            moviePoster: movie.poster_path,
                            movieOverview: movie.overview,
                            movieReleaseDate: movie.release_date,
                            movieVoteAverage: movie.vote_average,
                            movieType: movie.title ? 'movie' : 'tv',
                        }
                    })}>
                        <img src={movie.poster_path ? `${import.meta.env.VITE_REACT_BASEIMGURL}/${movie.poster_path}` : '/src/assets/imgNotFound.webp' } alt="" />
                    </div>
                ))}
            </>
        )
    }

    return (
        <>
            <SecondaryNavbar />
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
                            onChange={handleSearchInputChange}
                        />
                        <ion-icon
                            id='closeIcon'
                            onClick={() => {
                                setSearchQuery('')
                                document.getElementById('#search').value = ''
                            }}
                            style={{
                                display: searchQuery.length > 0 && 'block'
                            }}
                            name="close-circle-outline"
                        ></ion-icon>
                        <ion-icon id='searchIcon' name="search"></ion-icon>
                    </div>
                </div>

                <div className="wrapper">
                    <section>
                        <SearchResultList />
                    </section>
                </div>
            </div>
        </>
    )
}
