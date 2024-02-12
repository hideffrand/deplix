import { useEffect, useState } from "react";
import { getPopularMovieList } from "../api";
import bladerunner from "/src/assets/bladerunner.webp"
import "/src/style/style.css";

export default function Homepage() {
  const [index, setIndex] = useState(0)
  const [popularMovies, setPopularMovies] = useState([]);
  const [bgImage, setBgImg] = useState(bladerunner);
  const [name, setName] = useState('Stranger')

  useEffect(() => {
    getPopularMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);


  return (
    <div
      className="homepage"
      id="homepage"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(15,15,15,1), rgba(255,255,255, 0)), linear-gradient(to left, rgba(15,15,15,1), rgba(255,255,255, 0)), url(${bgImage})`,
      }}
    >
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div className="container">
        <h3>Welcome back!</h3>
        <h1>{name}</h1>
        <p>Watch limitless TV Shows and Movies from around the world.</p>
        <p>Ready to watch?</p>
      </div>
    </div>
  );
}
