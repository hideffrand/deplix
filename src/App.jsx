import "./style/style.css";
import { useState, useEffect } from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";
import Carousel from "./components/Carousel";
import {
  getPopularMovieList,
  getTopRatedList,
  getUpcomingList,
} from "/src/api";
import StartScreen from "./components/StartScreen";

export default function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [TopRatedMovies, setTopRatedMovies] = useState([]);
  const [TopRatedTV, setTopRatedTV] = useState([]);
  const [upcomingList, setUpcomingList] = useState([]);
  const [startScreen, setStartScreen] = useState(false);

  function getAll() {
    document.title = "Deplix - Watch Movies Online";
    getPopularMovieList().then((result) => {
      setPopularMovies(result);
    });
    getTopRatedList("movie").then((result) => {
      setTopRatedMovies(result);
    });
    getTopRatedList("tv").then((result) => {
      setTopRatedTV(result);
    });
    getUpcomingList().then((result) => {
      setUpcomingList(result);
    });
  }

  async function setUp() {
    setStartScreen(true);
    await getAll()
    setTimeout(() => {
      setStartScreen(false)
    }, 1000);
  }

  useEffect(() => {
    setUp()
  }, []);

  return (
    <>
      {startScreen && <StartScreen />}
      <Navbar />
      <Homepage />
      <Carousel
        movies={popularMovies}
        setDivId={"popular"}
        title={"Popular Movies"}
        setReload={false}
      />
      <Carousel
        movies={TopRatedMovies}
        setDivId={"topRatedMovies"}
        title={"Top Rated Movies"}
        setReload={false}
      />
      <Carousel
        movies={TopRatedTV}
        setDivId={"TopRatedTV"}
        title={"Top Rated TV"}
        setReload={false}
      />
      <Carousel
        movies={upcomingList}
        setDivId={"upcoming"}
        title={"Upcoming"}
        setReload={false}
      />
      <Footer />
    </>
  );
}
