import React from "react";
import { useRouter } from "next/navigation";
import "./peliculas.css";

export default function MovieDetail({ movie }) {
	const router = useRouter();

	const handleBack = () => {
		router.back();
	};

	return (
		<div className="movie-detail-container">
			<button onClick={handleBack} className="back-button">
				← Volver
			</button>

			<div className="movie-detail-content">
				<div className="movie-detail-poster">
					{movie.poster ? (
						<img
							src={movie.poster}
							alt={movie.title}
							className="movie-detail-image"
						/>
					) : (
						<div className="movie-detail-fallback">
							<span className="movie-detail-fallback-text">🎬</span>
						</div>
					)}
				</div>

				<div className="movie-detail-info">
					<h1 className="movie-detail-title">{movie.title}</h1>
					{movie.fullplot && (
						<p className="movie-detail-plot">{movie.fullplot}</p>
					)}

					{movie.genres && movie.genres.length > 0 && (
						<div className="movie-detail-genres">
							<strong>Géneros:</strong> {movie.genres.join(", ")}
						</div>
					)}

					{movie.year && (
						<div className="movie-detail-year">
							<strong>Año:</strong> {movie.year}
						</div>
					)}

					{movie.imdb && movie.imdb.rating && (
						<div className="movie-detail-rating">
							<strong>IMDB Rating:</strong> {movie.imdb.rating}/10
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
