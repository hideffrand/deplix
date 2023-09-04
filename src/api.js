import axios from 'axios'

const baseUrl = import.meta.env.VITE_REACT_BASEURL
const apiKey = import.meta.env.VITE_REACT_APIKEY

// export const generateGuestSession = () => {
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: `Bearer ${import.meta.env.VITE_REACT_APITOKEN}`
//     }
//   };
  
//   return axios.get(`${baseUrl}/authentication/guest_session/new`, options)
//     .then(response => {
//       console.log('res from api: ',response)
//       return response.data
//     })
//     .catch(err => {
//       console.error(err)
//     });
// }

export const getDetails = async (type, id) => {
  try {
    const details = await axios.get(`${baseUrl}/${type}/${id}?&page=1&api_key=${apiKey}`)
    return details.data
  } catch (err) {
    console.log(err)
  }
}

export const getReviews = (type, id) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_REACT_APITOKEN}`
      }
    };
    return axios.get(`${import.meta.env.VITE_REACT_BASEURL}/${type}/${id}/reviews?language=en-US&page=1`, options)
      .then(response => {
        return response.data.results;
      })
      .catch(err => {
        console.error(err);
      });
}
  
export const searchMovie = async (q) => {
  try {
    const movie = await axios.get(`${baseUrl}/search/multi?query=${q}&page=1&api_key=${apiKey}`)
    return movie.data
  } catch (err) {
    console.log(err)
  }
}

export const getSimilar = async (type, id) => {
  try {
    const movie = await axios.get(`${baseUrl}/${type}/${id}/similar?page=1&api_key=${apiKey}`)
    return movie.data.results
  } catch (error) {
    console.log(error)
  }
}

export const getPopularMovieList = async () => {
  try {
    const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`)
    return movie.data.results
  } catch (error) {
    console.log(error)
  }
}

export const getTopRatedList = async (type) => {
  try {
    const movie = await axios.get(`${baseUrl}/${type}/top_rated?page=1&api_key=${apiKey}`)
    return movie.data.results
  } catch (error) {
    console.log(error)
  }
}

export const getUpcomingList = async () => {
  try {
    const movie = await axios.get(`${baseUrl}/movie/upcoming?page=1&api_key=${apiKey}`)
    return movie.data.results
  } catch (error) {
    console.log(error)
  }
}
