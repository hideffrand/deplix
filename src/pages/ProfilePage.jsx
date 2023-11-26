import '../style/style.css'
import { authUpdateProfile } from '../auth/authUpdateProfile'
import { useState } from 'react'

export default function ProfilePage() {
    const [name, setName] = useState('Deffrand')
    const [photoUrl, setPhotoUrl] = useState('')

    const handleUpdateProfile = async () => {
        try {
            await authUpdateProfile(name, photoUrl)
            console.log('profile updated')
        } catch (error) {
            console.error(`error when updating profile \n ${error}`)
        }
    }
    return (
        <div className="profilePage">
            <h1>Profile Page</h1>
            <button onClick={handleUpdateProfile}>update</button>
        </div>
    )
}