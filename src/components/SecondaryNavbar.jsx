import '/src/style/style.css'
import { useNavigate } from 'react-router-dom'
import BackButton from './BackButton'
import { useState } from 'react'

export default function SecondaryNavbar() {
    const navigate = useNavigate()
    const [backgroundColor, setBackgroundColor] = useState(false)
    
    const changeNavbarColor = () => {
        if (window.scrollY > 50) {
            setBackgroundColor(true)
        } else {
            setBackgroundColor(false)
        }
    }
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <nav id="secondaryNav" style={{
            backgroundColor: backgroundColor ? 'rgb(15,15,15)' : 'transparent',
            transition: '0.4s'
        }}>
            <section>
                <BackButton />
                <h1 id='logo' onClick={() => navigate('/')}>DEPLIX</h1>
            </section>
            <ion-icon id="menuIcon" name="menu-outline"></ion-icon>
        </nav>
    )
}