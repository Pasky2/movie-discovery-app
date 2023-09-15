import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  
} from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Footer from "./components/Footer";

const API_KEY = "068ccc0956857d96f88cfe7582410c05";
const BASE_URL = "https://api.themoviedb.org/3";

function App() {
  const [topMovies, setTopMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const fetchMovies = async () => {
    const response = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    setTopMovies(response.data.results);
    setLoading(false);
  };

  useEffect(() => {
    //Fetch top 10 movies
    // setTimeout(() => {
    //   axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    //   .then((response) => {
    //     if(!response.status == 200) {
    //       throw Error ('Movies not found')
    //     }
    //    return response.data.results;
    //   })
    //   .then((results) => {
    //     setTopMovies(results);
    //     setLoading(false);
    //     setError(null);
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //     setLoading(false);
    //   });
    // }, 1000);
    setTimeout(() => {
      fetchMovies();
    }, 500);
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="pb-5">
          <Header
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            loading={loading}
            setLoading={setLoading}
            topMovies={topMovies}
            fetchMovies={fetchMovies}
            setTopMovies={setTopMovies}
          />
          <div className="text-white mt-5 text-start mx-5 px-5">
            <h4>John Wick 3:</h4>
            <h4>Parabellum</h4>
            <p className="trailer-overview">
              John Wick is on the run
              after killing a member <br /> of the international assassins' guild, and
              with <br/>a $14 million price tag on his head, he is the <br />target of hit
              men and women everywhere.
            </p>
            <Link className='btn btn-danger text-white btn-sm trailer'><i className="bi bi-play-fill text-danger play"></i> WATCH TRAILER</Link>
          </div>
        </header>

        <Switch>
          <Route exact path="/">
            <div className="container mt-5">
              <div className="featured-movies">
                <h4>Featured Movies</h4>
                <Link to="/Movies" className="text-decoration-none">
                  See More <i className="bi bi-arrow-right-short"></i>
                </Link>
              </div>
            </div>
            {loading && (
              <div className="container m-auto text-center">
                <h4>Loading...</h4>
              </div>
            )}

            <div className="movie-grid container">
              {
              topMovies?.length > 0 ? (
                topMovies.slice(0, 10).map((movie, id) => (
                  <div className="shadow rounded-4 movie-card" key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                      <img
                        src={
                          movie.poster_path !== "N/A"
                            ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                            : "https://via.placeholder.com/400"
                        }
                        alt={movie.title}
                        data-testid="movie-poster"
                        className="img-fluid card-img"
                      />
                      <div className="card-body text-start p-2">
                        <p data-testid="movie-title" className="card-title">
                          <b>Title:</b> {movie.title}
                        </p>
                        <p
                          data-testid="movie-release-date"
                          className="card-text"
                        >
                          <b>Release Date:</b> {movie.release_date}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))
              ) : (
                <p>No Movies found</p>
              )}
            </div>
          </Route>
          <Route path="/movies/:id">
            <MovieDetails />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

function MovieDetails() {
  // const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movie/${movie}?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  }, [movie]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-details">
      <h2 data-testid="movie-title">{movie.title}</h2>
      <p data-testid="movie-release-date">Release Date: {movie.release_date}</p>
      <p data-testid="movie-runtime">Runtime: {movie.runtime} minutes</p>
      <p data-testid="movie-overview">{movie.overview}</p>
    </div>
  );
}

export default App;
