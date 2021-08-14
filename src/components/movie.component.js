import '../styles/movie.component.css';
export const MovieComponent = ({movie}) => {
  return (
      <div className={'movie-wrapper'}>
        <img src={movie.posterurl} alt="movie poster"/>
      </div>
  )
}
