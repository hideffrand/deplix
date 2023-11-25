import { useEffect, useState } from "react";
import { getPopularMovieList } from "../api";
import bladerunner from "/src/assets/bladerunner.webp"
import { authGetUserProfile } from "../auth/authGetUserProfile";
import "/src/style/style.css";

export default function Homepage() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [bgImage, setBgImg] = useState(bladerunner);
  const [name, setName] = useState('Stranger')

  useEffect(() => {
    getPopularMovieList().then((result) => {
      setPopularMovies(result);
    });
    const user = authGetUserProfile()
    if (user) {
      console.log(user.email)
      setName(user.email)
    }
  }, [name]);
    
  // const handleLogout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       // Sign-out successful.
  //       navigate("/");
  //       console.log("Signed out successfully");
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //     });
  // };

  // for (let i = 0; i < popularMovies.length; i++) {
  //     setTimeout(function() {
  //         console.log(i);
  //         setBgImg(`${import.meta.env.VITE_REACT_BASEIMGURL}/${popularMovies[i].poster_path}`)
  //     }, 6000 * i);
  // }

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
        <h3>Welcome,</h3>
        <h1>{name}</h1>
        <p>Watch limitless TV Shows and Movies from around the world.</p>
        <p>Ready to watch?</p>
      </div>
    </div>
  );
}
