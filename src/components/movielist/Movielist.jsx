import React, { useEffect, useRef, useState } from 'react';
import './movielist.css';
import fire from '../../assets/fire.png';
import star from '../../assets/star.png';
import { getalldata } from '../apii/api'; // Assuming this is your API function
import { useNavigate } from "react-router-dom";

const Movielist = () => {
  const [movi, setmovi] = useState([]);
  const navigate = useNavigate();

  // Search/Filter State
  const [searchfilter, setsearchfilter] = useState('');
  const [issearched, setissearched] = useState(false);
  const titleref = useRef(null);

  // Data Fetching
  const getdata = async () => {
    try {
      const data = await getalldata();
      setmovi(data.results); // TMDB stores movies in data.results
    } catch (error) {
      console.error("Error fetching movie data:", error);
      // Optionally handle error state
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  // Navigation Handler
  const handleClick = (movie) => {
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  // Search Handler
  const onsearch = () => {
    const inputValue = titleref.current.value.trim();

    if (inputValue) {
      setsearchfilter(inputValue);
      setissearched(true);
    } else {
      setsearchfilter('');
      setissearched(false);
    }
  };

  // Movie Filtering Logic
  const filteredMovies = issearched
    ? movi.filter(movie =>
        movie.title.toLowerCase().includes(searchfilter.toLowerCase())
      )
    : movi;

  return (
    <div>
      <div className="movielist">
        {/* Filtering section */}
        <header className="movielistheader">
          <div>
            <h2>
              Popular Movies <img src={fire} alt="fire icon" className="navfire" />
            </h2>
          </div>

          <div className="moviefs">
            <ul>
              {/* Search Input and Button */}
              <li>
                <input
                  ref={titleref}
                  type="text"
                  placeholder="Search Your Movie..."
                  className="inp"
                />
              </li>
              <li>
                <button onClick={onsearch} className="btn">Search</button>
              </li>

              {/* Static Filter Items */}
              <li className="moviefilteritem">8+ Stars</li>
              <li className="moviefilteritem">7+ Stars</li>
              <li className="moviefilteritem">6+ Stars</li>
            </ul>

            {/* Sorting Dropdowns */}
            <select className="moviesorting">
              <option value="">Sorted By</option>
              <option value="date">Date</option>
              <option value="rating">Rating</option>
            </select>

            <select className="moviesorting">
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </header>
      </div>

      {/* Movie display section */}
      <div className="main">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-card" onClick={() => handleClick(movie)}>
              <div className="movie-card__image">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://via.placeholder.com/150"
                  }
                  alt={movie.title}
                  className="movie-card__img"
                />
              </div>

              <div className="movie-card__content">
                <h2 className="movie-card__title">{movie.title}</h2>
                <p className="movie-card__description">{movie.overview}</p>
                <div className="movie-card__bottom">
                  <span className="movie-card__release-date">{movie.release_date}</span>
                  <div className="movie-card__rating">
                    <p>{movie.vote_average}</p>
                    <img src={star} alt="star" className="movie-card__star" />
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="movie-card__overlay">
                Click for more details!
              </div>
            </div>
          ))
        ) : (
          <p>Loading movies...</p>
        )}
      </div>
    </div>
  );
};

export default Movielist;