import '/src/style/style.css'
import Searchbar from '../components/Searchbar'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    return (
        <>
            <span></span>
            <section>
                <Searchbar />
                <ion-icon id='searchButton' onClick={() => navigate('/discover')} name="search"></ion-icon>
                <ion-icon id='personIcon' onClick={() => navigate('/discover')} name="person"></ion-icon>
            </section>
        </>
    )
}