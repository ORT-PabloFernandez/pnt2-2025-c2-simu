'use client';

import React, { useState, useEffect } from 'react';
import { MdLocalMovies } from "react-icons/md";
import Link from 'next/link';

export default function Top10Peliculas() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchMovies() {
            try {
                const response = await fetch(`https://mflixbackend.azurewebsites.net/api/movies?pageSize=100&page=1`);
                const data = await response.json();
                const top10 = data.sort((a, b) => a.imdb.rating - b.imdb.rating).slice(0, 10)
                setMovies(top10);
                setLoading(false);


            } catch {
                console.error('Error fetching movies:', error);
                setLoading(false);
            }
        }
        fetchMovies();

    }, []);
    if (loading) {
        return <div>Cargando...</div>;
    }
    return (
        <div>
            <h2>Top 10 Películas</h2>
            <ul> {movies.map((movie) => (
                <li>
                    {movie.title}
                </li>
            ))}


            </ul>
        </div>
    );
}