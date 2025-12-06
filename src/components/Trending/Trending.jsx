import React, { useEffect, useState } from 'react';
import './trending.css'

const Trending = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/trending/movie/day?api_key=b7e95c400d994857ff15ea758a87b75a'
      );
      const data = await response.json();
      const filtered = data.results.filter(movie => movie.backdrop_path);
      setMovies(filtered);
    } catch (error) {
      console.error("❌ Failed to fetch movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();

    const interval = setInterval(() => {
      const slider = document.querySelector('.slider-container');
      if (slider) {
        const nextScroll = slider.scrollLeft + slider.offsetWidth;
        if (nextScroll >= slider.scrollWidth) {
          slider.scrollLeft = 0;
        } else {
          slider.scrollLeft = nextScroll;
        }
      }
    }, 4000); // auto-slide every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='paddi'>
      <div className="slider-container">
        <div className="slider">
          {movies.map((movie) => (
            <div
              className="slide"
              key={movie.id}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              }}
            >
              <div className="banner-content">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-rating">⭐ {movie.vote_average}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
