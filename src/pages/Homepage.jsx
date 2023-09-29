import { useEffect, useState } from "react";
import { getPopularMovieList } from "../api";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase";
// import {  signOut } from "firebase/auth";
import "/src/style/style.css";

export default function Homepage() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [bgImage, setBgImg] = useState("/src/assets/bladerunner.webp");

  useEffect(() => {
    getPopularMovieList().then((result) => {
      setPopularMovies(result);
    });
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     // User is signed in, see docs for a list of available properties
    //     // https://firebase.google.com/docs/reference/js/firebase.User
    //     const uid = user.uid;
    //     // ...
    //     console.log("user", user);
    //   } else {
    //     // User is signed out
    //     // ...
    //     console.log("user is logged out");
    //   }
    // });
  }, []);
    
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

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
        <h1>Stranger</h1>
        <p>Watch limitless TV Shows and Movies from around the world.</p>
        <p>Ready to watch?</p>
      </div>
    </div>
  );
}
