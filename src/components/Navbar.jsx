import '/src/style/style.css'
import Searchbar from '../components/Searchbar'

export default function Navbar() {
    return (
        <>
            <span></span>
            <section>
                <Searchbar />
                <button><ion-icon id='icon' name="person"></ion-icon></button>
            </section>
        </>
    )
}