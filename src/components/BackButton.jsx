import '/src/style/style.css'

export default function BackButton() {
    return (
        <button id="backButton" onClick={() => history.back()}>
            <ion-icon name="chevron-back-outline"></ion-icon>
            Back
        </button>
    )
}