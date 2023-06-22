import '/src/style/style.css'
import { useState } from 'react'
import axios from 'axios'

export default function Signup() {
    const [usernameSignup, setUsernameSignup] = useState('')
    const [passwordSignup, setPasswordSignup] = useState('')

    const signup = async () => {
        axios.post('/signup', {
          username: usernameSignup,
          password: passwordSignup,
         }).then((response) => {
            console.log(response);
         });
    };

    
    return (
        <div className="login">
            <label htmlFor="">Username</label>
            <input type="text"
                onChange={(e) => {
                    setUsernameSignup(e.target.value)
                }}
            />
            <label htmlFor="">Password</label>
            <input type="text"
                onChange={(e) => {
                    setPasswordSignup(e.target.value)
                }}
            />
            <button onClick={signup}>Signup</button>
        </div>
    )
}