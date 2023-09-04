import { useEffect } from 'react'
import BackButton from '../components/BackButton'
import '/src/style/style.css'
import { useState } from 'react'
import { emailRegex } from '../utils/emailRegex'
import { Link } from 'react-router-dom'


export default function Login() {
    
    const [email, setEmail] = useState('')
    const [displayAlertEmail, setDisplayAlertEmail] = useState('none')
    const [password, setPassword] = useState('')
    const [eye, setEye] = useState('eye-outline')
    const [typePassword, setTypePassword] = useState('password')
    
    console.log(email)
    console.log(password)

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
    
    const handleSubmit = () => {
        if (!emailRegex(email)) {
            setDisplayAlertEmail('block')
        } else {
            document.getElementById('form').reset()
            setEmail('')
            setPassword('')
            // send to backend
        }
    }

    return (
        <div className="authForm">
            <div className="container">
                <h1>Welcome back !</h1>
                <p>Tired from the day? Enjoy your favourite Movies and TV Series now.</p>
                <form action="#" id='form'>
                    <label htmlFor="email">Email</label>
                    <input type="text" id='email' required placeholder='Your email...' onChange={(e) => setEmail(e.target.value)}/>
                    <p id='alertEmail' style={{
                        display: displayAlertEmail,
                        color: 'grey',
                        textAlign: 'start',
                        paddingBottom: '8px'
                    }}>Please input valid email !</p>
                    <label htmlFor="password">Password</label>
                    <div className="passwordInput">
                        <input type={typePassword} id="password" required placeholder='Your password...' onChange={(e) => setPassword(e.target.value)}/>
                        <button id='eyeBtn' onClick={handleEye}><ion-icon name={eye}></ion-icon></button>
                    </div>
                    <button id='loginBtn' onClick={handleSubmit}>
                        Login
                    </button>
                </form>
                <p>or Login with</p>
                <button id='googleBtn'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                    Login with Google
                    <span></span>
                </button>
                <p>Don't have an account? <Link to="/signup">Sign up.</Link></p>
                <BackButton />
            </div>
        </div>
    )
}