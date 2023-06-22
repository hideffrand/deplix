import '/src/style/style.css'

export default function Searchbar() {
    return (
        <div className="search-bar">
            <input id='search' type="text" placeholder='Search...'/>
            <button><ion-icon name="search"></ion-icon></button>
        </div>
    )
}