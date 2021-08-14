import '../styles/movie.component.css';
export const MovieComponent = ({movie, viewMode}) => {

  // get rating and round to one decimal
  const rating = (movie.ratings.reduce((a, b) => a + b, 0) / movie.ratings.length).toFixed(1);

  return (
      <div className={['movie-wrapper', viewMode].join(' ')}>
        <img className={'poster'} src={movie.posterurl} alt="movie poster"/>
        <div className={'rating'}>
          <img src={'rating-star.svg'} alt="rating star"/>
          <div className={'numbers'}>
            <div><strong>{rating}</strong>/10</div>
            <span>{movie.ratings.length} ratings</span>
          </div>
        </div>
        <h4 className={'movie-title'}>{movie.title}</h4>
        <div className={'genres'}>
          {
            movie && movie.genres ? movie.genres.map(genre => {
              return <div className={'genre'} key={genre}>{genre}</div>
            }) : null
          }
        </div>
        <div className={'actors'}>
          <strong>Actors: </strong>
          {
            movie && movie.actors ? movie.actors.map(actor => {
              return <div className={'actor'} key={actor}> {actor} <span>&#183;</span> </div>

            }) : null
          }
        </div>
      </div>
  )
}
