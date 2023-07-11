import '/src/style/style.css'
import Searchbar from './Searchbar'

export default function Navbar() {
    return (
        <nav>
            <section>
                <h1>DEPLIX</h1>
                <div className="links">
                    <a href="#popular">Popular</a>
                    <a href="#topRatedMovies">Top Rated</a>
                    <a href="">Up Coming</a>
                </div>
            </section>
            <section>
                <Searchbar setAnimation={'none'} />
                <button id="loginButton">Login</button>
                <button id="signupButton">Sign up</button>
            </section>
        </nav>
    )
}