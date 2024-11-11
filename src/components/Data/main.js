
const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGRlMDNmNWZhMjU3OTRlNTZmNmRjZDhmNTE2YmQzNSIsIm5iZiI6MTczMDU3NTc0OC42MDczMzEzLCJzdWIiOiI2NzIzY2NjODI4YmQ5NjZjOWU2NzM1MjEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oB6lA5aNDOk3XZG1oNMLKcMWU0E_Ar401H9P4nvHCXo';
async function Genre () {

    const response = await fetch ("https://api.themoviedb.org/3/genre/movie/list?language=en", {
        headers: {
            accept: "application/json",
            Authorization : API_KEY ,
          },
    }); 
        const data = await response.json();
        console.log(data);
    }

    
    Genre();