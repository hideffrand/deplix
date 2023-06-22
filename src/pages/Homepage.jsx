import '/src/style/style.css'
import { useNavigate } from 'react-router-dom'

export default function Homepage() {
    const navigate = useNavigate()
    return (
        <div className="homepage" id="homepage">
            <div className="container">
                <h3>Welcome,</h3>
                <h1>Stranger</h1>
                <p>Watch limitless TV Shows and Movies from around the world.</p>
                <p>Ready to watch? </p>
                <div className="buttons">
                    <button id='sign-up' onClick={() => navigate('/signup')}>Sign up</button>
                    <button id='login'onClick={() => navigate('/login')}>Login</button>
                </div>
            </div>
        </div>
    )
}
