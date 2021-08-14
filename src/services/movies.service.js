/**
* Get all movies from movies API
* */
export const getAllMovies = async() => {
  fetch('server/movies.php')
      .then(response => {
        if(response.ok) {
          return response.json();
        }
        throw new Error(response.statusText);
      })
}
