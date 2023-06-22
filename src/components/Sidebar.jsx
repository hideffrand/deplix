import '/src/style/style.css'
import { useNavigate } from 'react-router-dom'

export default function Sidebar() {
    const navigate = useNavigate()

    return (
        <>
            <div className="menu-container">
                <section>
                    <h1>Search Movies</h1>
                    <a onClick={() => navigate('/#popular') } href="#popular">Popular</a>
                    <a onClick={() => navigate('/#top-rated-movies') } href="#top-rated-movies">Top Rated</a>
                </section>
                <section>
                    <h1>Help & Supports</h1>
                    <a href="">Terms and Conditions</a>
                    <a href="">Contact Support</a>
                </section>
            </div>
        </>
    )
}