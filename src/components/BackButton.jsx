import { useNavigate } from 'react-router-dom'
import '/src/style/style.css'


export default function BackButton() {
    const navigate = useNavigate()
    function handleClick() {
        navigate("/")
    }
    return (
        <button id="backButton" onClick={handleClick}>
            <ion-icon name="chevron-back-outline"></ion-icon>
            Back
        </button>
    )
}