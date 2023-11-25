import '/src/style/style.css'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getReviews, getSimilar, getDetails } from '../api'
import SecondaryNavbar from '../components/SecondaryNavbar'
import Carousel from '../components/Carousel'
import Footer from './Footer'
import Image from '../components/Image'

export default function MovieDetails() {
    const { type, id} = useParams()
    const [details, setDetails] = useState([])
    const [reviews, setReviews] = useState([])
    const [similar, setSimilar] = useState([])
    const [loadingReviews, setLoadingReviews] = useState(false)
    
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        getDetails(type, id).then((result) => {
            setDetails(result)
            document.title = `${result.title ? result.title : result.name} - Deplix`
        })
        getReviews(type, id).then(result => {
            setLoadingReviews(true)
            setTimeout(() => {
                setLoadingReviews(false)
                console.log('reviews log: ', result)
                setReviews(result)
            }, 0);
        })
        getSimilar(type, id).then(result => {
            setSimilar(result)
        })
    }, [])
    
    const navigate = useNavigate()
    const voteAverage = details.vote_average

    let titleForCarousel = ''
    if (type == 'movie') {
        titleForCarousel = type.charAt(0).toUpperCase() + (type.slice(1)) + 's'
    }
    if (type == 'tv') {
        titleForCarousel = type.toUpperCase() + 's'
    }
    console.log('type :',type)

    const ReviewList = () => {
        const [maxLenghts, setMaxLengths] = useState(reviews?.map(() => true));
    
        const toggleMaxLength = (index) => {
            const updatedMaxLenghts = [...maxLenghts];
            updatedMaxLenghts[index] = !updatedMaxLenghts[index];
            setMaxLengths(updatedMaxLenghts);
        };
    
        if (reviews?.length > 0) {
            return (
                <>
                    <p>{reviews.length} reviews</p>
                    {reviews?.map((review, i) => (
                        <div className="reviewContainer" key={i}>
                            <div className="profile">
                                <div className="profileImage" style={{
                                    backgroundImage: review.author_details.avatar_path ? `url(${import.meta.env.VITE_REACT_BASEIMGURL}/${review.author_details.avatar_path})` : '/src/assets/emptyProfile.webp'
                                }}></div>
                                <p id='author'>{review.author_details.username}</p>
                            </div>
                            {maxLenghts[i] ? <p>{(review.content).slice(0, 300) + '...'}</p> : <p>{(review.content)}</p>}
                            {
                                review.content.length > 300 &&
                                <p onClick={() => toggleMaxLength(i)} style={{cursor: 'pointer', color: 'white'}}>
                                    {maxLenghts[i] ? 'See more...' : 'Show less...'}
                                </p>
                            }
                            <p style={{paddingTop: '10px', textAlign: 'end'}}>Posted at {(review.created_at).slice(0, 10)}</p>
                        </div>
                    ))}
                </>
            );
        } else {
            return (
                <>
                    <p style={{color: 'rgb(200, 200, 200)'}}>0 Reviews</p>
                </>
            );
        }
    };
    

    return (
        <>
            <SecondaryNavbar />
            <div className="movieDetails" style={{
                backgroundImage: details.backdrop_path ? `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${import.meta.env.VITE_REACT_BASEIMGURL}/${details.poster_path})` : 'linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 1))'
            }}>
                <div className="movieDetailsContainer">
                    <div className="imgSection">
                        <Image url={details.poster_path} title={details.title} name={details.name}/>
                    </div>
                    <div className="textSection">
                        <h1>{details.title ? details.title : details.name}</h1>
                        <p id='movieOverview'>{details.overview}</p>
                        <p id='movieReleaseDate'>Release date: {details.release_date}</p>
                        <p>Ratings: {voteAverage?.toFixed(1)}</p>
                        <div className="voteAverageContainer">
                            <div className="voteAverageCover">
                                <div
                                    className="voteAverage"
                                    style={{
                                    width: `${details.vote_average * 10}%`
                                    }}
                                ></div>
                            </div>
                        </div>
                        {/* <a href={movieTrailerLink}>Watch Trailer</a> */}
                        <section className="buttonSection">
                            <button id='addButton' onClick={() => navigate('/watchlist')}>
                                <ion-icon className='icon' name="add-sharp"></ion-icon>
                                Add to watchlist
                            </button>
                            <button id='playNowButton'><ion-icon className='icon' name="play-sharp"></ion-icon>Play now</button>
                        </section>
                    </div>
                </div>
            </div>
            <div className="reviewSection">
                <h3>Reviews</h3>
                {loadingReviews ? <p style={{paddingLeft: '10%', color: 'rgb(200, 200, 200)'}}>Loading...</p> : <ReviewList />}
            </div>
            <Carousel movies={similar} title={`Similar ${titleForCarousel}`} setReload={true} />
            <Footer />
        </>
    )
}