import '/src/style/style.css'
import { useNavigate } from 'react-router-dom'
import Searchbar from './Searchbar'
import { authSignout } from '../auth/authSignout'
import { onAuthStateChange } from '../auth/onAuthStateChange'
import { authGetUserProfile } from '../auth/authGetUserProfile'
import { useState, useEffect } from 'react'

export default function Navbar() {
    const navigate = useNavigate()

    function handleProfileButton() {
        const user = authGetUserProfile()
        if (user) {
            navigate("/")
        } else {
            navigate("/signup")
        }
    }

    return (
        <nav>
            <section>
                <h1 onClick={()=> navigate('/')}>DEPLIX</h1>
                <div className="links">
                    <a href="#popular">Popular</a>
                    <a href="#topRatedMovies">Top Rated</a>
                    <a href="#upcoming">Up Coming</a>
                </div>
            </section>
            <section>
                <div id="searchBar">
                    <Searchbar setAnimation={'none'} />
                </div>
                <ion-icon id='searchIcon' name="search" onClick={() => navigate('/discover')}></ion-icon>
                <button className='userBtn' onClick={() => navigate('/watchlist')}><ion-icon name="bookmarks-outline"></ion-icon></button>
                <button className="userBtn" onClick={() => handleProfileButton()}>
                    <ion-icon name="person-circle-outline"></ion-icon>
                </button>
                <button className='userBtn' onClick={() => authSignout()}><ion-icon name="log-out-outline"></ion-icon></button>
            </section>
        </nav>
    )
}