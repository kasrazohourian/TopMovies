import "./stylet.css";
import 'animate.css';
import React, { useState, useEffect } from 'react';

export function Trend() {
    const [TrendList, setTrendList] = useState([]);

    const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGRlMDNmNWZhMjU3OTRlNTZmNmRjZDhmNTE2YmQzNSIsIm5iZiI6MTczMDU3NTc0OC42MDczMzEzLCJzdWIiOiI2NzIzY2NjODI4YmQ5NjZjOWU2NzM1MjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oB6lA5aNDOk3XZG1oNMLKcMWU0E_Ar401H9P4nvHCXo';

    useEffect(() => {
        async function fetchTrendList() {
            try {
                const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US", {
                    headers: {
                        accept: "application/json",
                        Authorization: API_KEY,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setTrendList(data.results);
            } catch (error) {
                console.error("Failed to fetch trending movies:", error);
            }
        }

        fetchTrendList();
    }, []);

    return (
        <div className="trend-container">
            <div className="title-of-tv">Trending Movies</div>
            <div className="trend-list">
                {TrendList.map((trend) => (
                    <div key={trend.id} className="card">
                        <img 
                            src={`http://image.tmdb.org/t/p/w342/${trend.poster_path}`} 
                            alt={trend.title || "No Title Available"} 
                        />
                        <div className="name">{trend.title || "No Title"}</div>
                        <div className="release_date">
                            {trend.release_date ? trend.release_date.slice(0, 4) : "Unknown Year"}
                        </div>
                        <div className="overview">
                            <h2>{trend.overview || "No Overview Available"}</h2>
                        </div>
                        <div className="vote_average">
                            <div className="vote">{trend.vote_average || "N/A"}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
