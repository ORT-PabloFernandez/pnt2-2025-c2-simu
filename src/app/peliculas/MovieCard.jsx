import React, { useState } from 'react';
import { MdLocalMovies } from "react-icons/md";
import './peliculas.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'


export default function MovieCard({ movie }) {
  const [imageError, setImageError] = useState(false);

  const [liked, setLiked] = useState(false);
  const handleImageError = () => {
    setImageError(true);
  };
  const toggleLike = () => {
    setLiked(!liked);
  }

  return (
    <div className="movie-card">
      <button className="like-button" onClick={toggleLike}>
        <FontAwesomeIcon icon={liked ? solidHeart : regularHeart} />
      </button>
      {movie.poster && !imageError ? (

        <img

          src={movie.poster}
          alt={movie.title}
          className="movie-poster"
          onError={handleImageError}
        />
      ) : (
        <div className="movie-fallback">
          <span className="movie-fallback-text"><MdLocalMovies /> </span>
        </div>
      )}
      <p className="movie-title">
        <Link href={`/peliculas/${movie._id}`}>{movie.title}</Link></p>
      <p className='movie-plot'>{movie.fullplot}</p>
    </div>
  );
}