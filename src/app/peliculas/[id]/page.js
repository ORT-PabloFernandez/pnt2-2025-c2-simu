'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'


import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import '../peliculas.css';
import MovieCard from '../MovieCard';

export default function MovieDetail() {
    const params = useParams();
    const [movie, setMovie] = useState(null);
    const [imageError, setImageError] = useState(false);

    const [liked, setLiked] = useState(false);
    const handleImageError = () => {
        setImageError(true);
    };
    const toggleLike = () => {
        setLiked(!liked);
    }

    console.log(params.id);
    useEffect(() => {
        const fetchMovie = async () => {
            const response = await fetch(`https://mflixbackend.azurewebsites.net/api/movies/${params.id}`);
            const data = await response.json();


            setMovie(data);

            console.log(data);
        };

        fetchMovie();
    }, [params.id]);

    if (!movie) {
        return <div>fallo</div>;
    }

    return (
        <div className="movie-detail">
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
            </div>

            <div className='movie-info'>
                <h2>{movie.title}</h2>
                <p>{movie.fullplot}</p>
            </div>
        </div>
    );
}
