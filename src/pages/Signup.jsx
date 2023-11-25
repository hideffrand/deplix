import { useState } from 'react'
import BackButton from '../components/BackButton'
import '/src/style/style.css'
import { emailRegex } from '../utils/emailRegex'
import { Link, useNavigate } from 'react-router-dom'
import { authSignupEmailFirebase } from '../auth/authSignupEmailFirebase'

export default function Signup() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [eye, setEye] = useState('eye-outline')
    const [typePassword, setTypePassword] = useState('password')

    const handleEye = () => {
        if (eye == 'eye-outline') {
            setEye('eye-off-outline')
            setTypePassword('text')
        }
        if (eye == 'eye-off-outline') {
            setTypePassword('password')
            setEye('eye-outline')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const termsCon = document.getElementById('termsCon').checked
        if (emailRegex(email) && termsCon) {
            try {
                await authSignupEmailFirebase(email, password)
                console.log(`register success`)
                navigate("/")
            } catch (error) {
                console.error(error)
            }
        } else {
            console.log('please checkbox')
        }
    }

    return (
        <div className="authForm">
            <div className="container">
                <h1>Welcome !</h1>
                <p>Sign up for more Movies and TV Series, use Watchlist, and Bookmarks your favourites!</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' required placeholder='Your email...' onChange={(e) => setEmail(e.target.value) }/>
                    <label htmlFor="password">Password</label>
                    <div className="passwordInput">
                        <input type={typePassword} id="password" required placeholder='Your password...' onChange={(e) => setPassword(e.target.value)}/>
                        <button id='eyeBtn' onClick={handleEye}><ion-icon name={eye}></ion-icon></button>
                    </div>
                    <span>
                        <input type="checkbox" id='termsCon'/>
                        <label htmlFor="termsCon">I agree with <a href="">Terms</a> and <a href="">Condition</a></label>
                    </span>
                    <button type='submit' id='loginBtn'>
                        Signup
                    </button>
                </form>
                <p>or Signup with</p>
                <button id='googleBtn'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                    Signup with Google
                    <span></span>
                </button>
                <p>Already have an account? <Link to="/login">Login.</Link></p>
                <BackButton />
            </div>
        </div>
    )
}