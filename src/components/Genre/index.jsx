import "./style.css";

import React, { useState, useEffect } from 'react';

export function Genre() {
    
    const [genres, setGenres] = useState([]);

    const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGRlMDNmNWZhMjU3OTRlNTZmNmRjZDhmNTE2YmQzNSIsIm5iZiI6MTczMDU3NTc0OC42MDczMzEzLCJzdWIiOiI2NzIzY2NjODI4YmQ5NjZjOWU2NzM1MjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oB6lA5aNDOk3XZG1oNMLKcMWU0E_Ar401H9P4nvHCXo';

    useEffect(() => {
        async function fetchGenres() {
            const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", {
                headers: {
                    accept: "application/json",
                    Authorization: API_KEY,
                },
            });

            const data = await response.json();
            setGenres(data.genres); // Setze die Genres in den State
        }

        fetchGenres();
    }, []); // Leeres Array sorgt dafür, dass der Effekt nur einmal beim Laden der Komponente ausgeführt wird.

    return (
       
        
        <div className="genre-container">
                <div className="genre-list">
                    {genres.map(genre => (
                        <div key={genre.id} >{genre.name} </div> // Dynamisches Rendering der Genres
                    ))}
                </div>
        

        </div>
        
    );
}
