import "./style.css";
import React, { useState, useEffect } from "react";

export function Genre() {
    const [movieGenres, setMovieGenres] = useState([]);
    const [tvGenres, setTvGenres] = useState([]);

    const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGRlMDNmNWZhMjU3OTRlNTZmNmRjZDhmNTE2YmQzNSIsIm5iZiI6MTczMDU3NTc0OC42MDczMzEzLCJzdWIiOiI2NzIzY2NjODI4YmQ5NjZjOWU2NzM1MjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oB6lA5aNDOk3XZG1oNMLKcMWU0E_Ar401H9P4nvHCXo';

    useEffect(() => {
        async function fetchGenres() {
            try {
                const movieResponse = await fetch(
                    "https://api.themoviedb.org/3/genre/movie/list?language=en",
                    {
                        headers: {
                            accept: "application/json",
                            Authorization: API_KEY,
                        },
                    }
                );

                const tvResponse = await fetch(
                    "https://api.themoviedb.org/3/genre/tv/list?language=en",
                    {
                        headers: {
                            accept: "application/json",
                            Authorization: API_KEY,
                        },
                    }
                );

                if (!movieResponse.ok || !tvResponse.ok) {
                    throw new Error("Failed to fetch genres");
                }

                const movieData = await movieResponse.json();
                const tvData = await tvResponse.json();

                setMovieGenres(movieData.genres);
                setTvGenres(tvData.genres);
            } catch (error) {
                console.error("Error fetching genres:", error);
            }
        }

        fetchGenres();
    }, []);

    return (
        <div className="genre-container">
            <h1>Unsere TV- und Movie-Genre Liste</h1>
            <div className="flex-container">
                <div className="list">
                    <h2>Movies Genres</h2>
                    {movieGenres.map((genre) => (
                        <div key={genre.id} className="genre-item">
                            {genre.name} <div className="foto"><img src="https://cdn-icons-png.flaticon.com/128/4831/4831192.png" alt="" /></div> 
                        </div>
                    ))}
                </div>
                <div className="list">
                    <h2>TV Genres</h2>
                    {tvGenres.map((genre) => (
                        <div key={genre.id} className="genre-item">
                            {genre.name}   <div className="foto"><img src="https://cdn-icons-png.flaticon.com/128/1527/1527065.png" alt="" /></div> 
                        
                        </div>
                        
                    ))}
                </div>
            </div>
            <h2 className="data" >Data Provided by <a href="https://www.themoviedb.org/"> <img src="https://gomoviedatabase.netlify.app/static/media/tmdb.bf7f470b3821af1da7fa249c87dadea3.svg" alt="" /></a>

            </h2> 
            <h2 className="developer">Designed & Developed by 
            Kasra Zohourian Adineh <a href="https://github.com/kasrazohourian?tab=repositories"><img src="https://cdn-icons-png.flaticon.com/128/2111/2111425.png" alt="" /></a></h2>
        </div>
    );
}
