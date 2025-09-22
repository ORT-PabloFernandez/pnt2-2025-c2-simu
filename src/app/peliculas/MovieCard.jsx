import React, { useState } from "react";
import "./peliculas.css";
import Link from "next/link";
import { FaFilm, FaStar } from "react-icons/fa";

export default function MovieCard({ movie }) {
	const [imageError, setImageError] = useState(false);
	const [isFavorite, setIsFavorite] = useState(false);

	const handleImageError = () => {
		setImageError(true);
	};

	const toggleFavorite = (e) => {
		e.preventDefault();
		e.stopPropagation();
		setIsFavorite(!isFavorite);
	};

	return (
		<Link href={`/peliculas/${movie._id}`} className="movie-card">
			<button
				type="button"
				className={`favorite-star${isFavorite ? " favorite-star--active" : ""}`}
				onClick={toggleFavorite}
			>
				<FaStar />
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
					<span className="movie-fallback-text">
						<FaFilm />
					</span>
				</div>
			)}
			<p className="movie-title">{movie.title}</p>
			<p className="movie-plot">{movie.fullplot}</p>
		</Link>
	);
}
