import './styles/App.css';
import { useEffect, useState } from "react";
import { getAllMovies } from "./services/movies.service";
import {MoviesLayout} from "./layout/movies.layout";
import {FilterComponent} from "./components/filter.component";
import {MovieComponent} from "./components/movie.component";
import {SearchComponent} from "./components/search.component";
import {ViewModeComponent} from "./components/view-mode.component";

function App() {

  // movies local state
  const [movies, setMovies] = useState(null);
  const [filteredMovies, setFilteredMovies] = useState(null);

  // view mode - default grid
  const [viewMode, setViewMode] = useState('grid')

  const editSearchTerm = (e) => {
      filterMovies(e.target.value)
  }

  const filterMovies = (term) => {
    setFilteredMovies(
        movies.filter(movie =>
            // search title, genres and actors
            [movie.title, movie.genres.join(' '), movie.actors.join(' ')].join('').toLowerCase().includes(term.toLowerCase())
        )
    )
  }

  // will call only once after first render
  useEffect(() => {

    // get all movies after component render
    getAllMovies()
        .then(movies => {
          setMovies(movies);
          setFilteredMovies(movies);
        })
        .catch(e => {
          console.error(e);
        })
    // no dependencies will cause use effect to run only once on initial re render
  }, [])

  return (
    <MoviesLayout>
      <FilterComponent
      searchComponent={ <SearchComponent onChange={editSearchTerm}/> }
      viewModeComponent={ <ViewModeComponent onChange={(mode) => setViewMode(mode)} viewMode={viewMode}/>}
      />
      <div className={['movies', viewMode].join(' ')}>
        {
          filteredMovies ? filteredMovies.map(movie => {
            return <MovieComponent viewMode={viewMode} movie={movie} key={movie.id}/>
          }) : <p>Loading...</p>
        }
      </div>
    </MoviesLayout>
  );
}

export default App;
