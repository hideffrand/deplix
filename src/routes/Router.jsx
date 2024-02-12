import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import MovieDetails from "../pages/MovieDetails";
import Discover from "../pages/Discover";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie-details/:type/:id" element={<MovieDetails />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
