"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import MovieDetail from "../MovieDetail";
import "../peliculas.css";

export default function MovieDetailPage() {
	const params = useParams();
	const [movie, setMovie] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function fetchMovie() {
			try {
				const response = await fetch(
					`https://mflixbackend.azurewebsites.net/api/movies/${params.id}`
				);
				const data = await response.json();

				if (data) {
					setMovie(data);
				} else {
					setError("Película no encontrada");
				}
				setLoading(false);
			} catch (error) {
				console.error("Error fetching movie:", error);
				setError("Error al cargar la película");
				setLoading(false);
			}
		}

		if (params.id) {
			fetchMovie();
		}
	}, [params.id]);

	if (loading) {
		return (
			<div className="movie-detail-container">
				<p>Cargando película...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="movie-detail-container">
				<p>{error}</p>
			</div>
		);
	}

	if (!movie) {
		return (
			<div className="movie-detail-container">
				<p>Película no encontrada</p>
			</div>
		);
	}

	return <MovieDetail movie={movie} />;
}
