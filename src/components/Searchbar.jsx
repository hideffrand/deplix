import '/src/style/style.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Searchbar() {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <div className="search-bar">
            <form action=''>
                <input
                    id='search'
                    type="text"
                    placeholder='Search...'
                    autoComplete='off'
                    onChange={(e) => {
                        setSearchQuery(e.target.value)
                    }}
                />
                <button type="submit" onClick={() => navigate('/discover', {
                    state: {
                        movieName: searchQuery
                    }
                })}><ion-icon name="search"></ion-icon></button>
            </form>
        </div>
    )
}