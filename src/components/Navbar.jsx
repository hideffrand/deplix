import '/src/style/style.css'
import { useNavigate } from 'react-router-dom'
import Searchbar from './Searchbar'

export default function Navbar() {
    const navigate = useNavigate()

    return (
        <nav>
            <section>
                <h1>DEPLIX</h1>
                <div className="links">
                    <a href="#popular">Popular</a>
                    <a href="#topRatedMovies">Top Rated</a>
                    <a href="#upcoming">Up Coming</a>
                </div>
            </section>
            <div id="searchBar">
                <Searchbar setAnimation={'none'} />
            </div>
            <ion-icon id='searchIcon' name="search" onClick={()=> navigate('/discover')}></ion-icon>
        </nav>
    )
}