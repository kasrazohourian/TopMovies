import "./style.css";
import 'animate.css';
import React, { useState, useEffect } from 'react';

export function Tv() {
    const [papulartv, setPapularTv] = useState([]);

    const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGRlMDNmNWZhMjU3OTRlNTZmNmRjZDhmNTE2YmQzNSIsIm5iZiI6MTczMDU3NTc0OC42MDczMzEzLCJzdWIiOiI2NzIzY2NjODI4YmQ5NjZjOWU2NzM1MjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oB6lA5aNDOk3XZG1oNMLKcMWU0E_Ar401H9P4nvHCXo';

    useEffect(() => {
        async function fetchPopularTv() {
            const response = await fetch("https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc", {
                headers: {
                    accept: "application/json",
                    Authorization: API_KEY,
                },
            });

            const data = await response.json();
            setPapularTv(data.results); // API-Daten werden im papular-State gespeichert
        }

        fetchPopularTv();
    }, []);

    return (
        <div className="tv-container">
             <div className="animate__animated animate__heartBeat animate__repeat-2">Popular Tv`s</div>
            <div className="tv-list">
                {papulartv.map((tv) => (
                    <div key={tv.id} className="card">
                        <img src={`http://image.tmdb.org/t/p/w342/${tv.poster_path}`} alt={tv.title} />
                        <div className="name">{tv.name}</div>
                        <div className="first_air_date">{tv.first_air_date?.slice(0, 4)}</div>
                        <div className="overview">
                            <h2>{tv.overview}</h2>
                            </div>
                        
                        <div className="vote_average">
                            <div className="vote">{tv.vote_average} </div>
                        </div>
                    </div>
                    
                ))}
            </div>
            
        </div>
        
    );
}
