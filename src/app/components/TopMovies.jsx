"use client";

import { useState, useEffect } from "react";
import MovieList from "../peliculas/MovieList";

export default function TopMovies() {
	const [topMovies, setTopMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchMovies = async () => {
			const response = await fetch(
				"https://mflixbackend.azurewebsites.net/api/movies?pageSize=100&page=1"
			);

			const data = await response.json();
			if (!data) {
				console.error("Error fetching movies");
			}

			const topMovies = data
				.sort((a, b) => b.imdb.rating - a.imdb.rating)
				.slice(0, 10);
			setTopMovies(topMovies);
			setIsLoading(false);
		};
		fetchMovies();
	}, []);

	return (
		<div className="top-movies">
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					<h1>Top Movies</h1>
					<ul>
						{topMovies.map((movie, counter) => (
							<li key={movie._id}>
								{counter + 1} - {movie.title}
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
}
