import './styles/App.css';
import { useEffect, useState } from "react";
import { getAllMovies } from "./services/movies.service";
import {MoviesLayout} from "./layout/movies.layout";
import {FilterComponent} from "./components/filter.component";
import {MovieComponent} from "./components/movie.component";

function App() {

  // movies local state
  const [movies, setMovies] = useState(null);

  // view mode - default grid
  const [viewMode, setViewMode] = useState('grid')

  // will call only once after first render
  useEffect(() => {

    // get all movies after component render
    getAllMovies()
        .then(movies => {
          console.log(movies);
          setMovies(movies);
        })
        .catch(e => {
          console.error(e);
        })
    // no dependencies will cause use effect to run only once on initial re render
  }, [])

  return (
    <MoviesLayout>
      <FilterComponent />
      <div className={['movies', viewMode].join(' ')}>
        {
          movies ? movies.map(movie => {
            return <MovieComponent viewMode={viewMode} movie={movie} key={movie.id}/>
          }) : <p>Loading...</p>
        }
      </div>
    </MoviesLayout>
  );
}

export default App;
