import React from "react";
import { useLocation } from "react-router-dom";
import star from '../../assets/star.png';
import './details.css'

const Details = () => {
  const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) return <p>No movie data available!</p>;

  return (
    <div
      className="details-banner"
      style={{
        backgroundImage: movie.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          : "url(https://via.placeholder.com/800x400)",
      }}
    >
      <div className="details-overlay">
        <div className="details-content">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/300x450"
            }
            alt={movie.title}
            className="details-poster"
          />
          <div className="details-info">
            <h1 className="details-title">{movie.title}</h1>
            <p className="details-overview">{movie.overview}</p>
            <p className="details-date">
              Release Date: {movie.release_date}
            </p>
            <p className="details-rating">
              Rating: {movie.vote_average}{" "}
              <img src={star} alt="star" className="star-icon" />
            </p>

             <div className="btngp">

              <button className="b1">Watch now</button>
              <button className="b2">Watch trailler</button>

             </div>
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
