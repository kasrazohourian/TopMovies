import "./style.css";
import 'animate.css';
import React, { useState, useEffect } from 'react';

export function Popular() {
    const [papular, setPapular] = useState([]);

    const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGRlMDNmNWZhMjU3OTRlNTZmNmRjZDhmNTE2YmQzNSIsIm5iZiI6MTczMDU3NTc0OC42MDczMzEzLCJzdWIiOiI2NzIzY2NjODI4YmQ5NjZjOWU2NzM1MjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oB6lA5aNDOk3XZG1oNMLKcMWU0E_Ar401H9P4nvHCXo';

    useEffect(() => {
        async function fetchPopularMovies() {
            const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
                headers: {
                    accept: "application/json",
                    Authorization: API_KEY,
                },
            });

            const data = await response.json();
            setPapular(data.results); // API-Daten werden im papular-State gespeichert
        }

        fetchPopularMovies();
    }, []);

    return (
        <div className="popular-container">
         <div className="title-of-movie">Popular Movies</div>
            <div className="papular-list">
                {papular.map((movie) => (
                    <div key={movie.id} className="card">
                        <img src={`http://image.tmdb.org/t/p/w342/${movie.poster_path}`} alt={movie.title} />
                        <div className="title">{movie.title}</div>
                        <div className="relase-date">{movie.release_date?.slice(0, 4)}</div>
                        <div className="overview">
                            <h2>{movie.overview}</h2>
                            </div>
                        
                        <div className="vote_average">
                            <div className="vote">{movie.vote_average} </div>
                        </div>
                    </div>
                    
                ))}
            </div>
            
        </div>
        
    );
}
