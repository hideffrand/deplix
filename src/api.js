import axios from 'axios'

const baseUrl = import.meta.env.VITE_REACT_BASEURL
const apiKey = import.meta.env.VITE_REACT_APIKEY

export const searchMovie = async (q) => {
    const movie = await axios.get(`${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`)
    return movie.data
}

export const getPopularMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
    return movie.data.results
}

export const getTopRatedMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/top_rated?page=1&api_key=${apiKey}`)
    return movie.data.results
}

export const getTopRatedTVList = async () => {
    const movie = await axios.get(`${baseUrl}/tv/top_rated?page=1&api_key=${apiKey}`)
    return movie.data.results
}
