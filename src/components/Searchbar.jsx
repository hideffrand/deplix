import '/src/style/style.css'
import { useNavigate } from 'react-router-dom'

export default function Searchbar({ setAnimation }) {
    const navigate = useNavigate()

    return (
        <div className="search-bar" onClick={() => navigate('/discover')} style={{
            animation: setAnimation
        }}>
            <input
                id='search'
                type="text"
                placeholder='Search...'
                autoComplete='off'
            />
            <ion-icon id='searchIcon' name="search"></ion-icon>
        </div>
    )
}