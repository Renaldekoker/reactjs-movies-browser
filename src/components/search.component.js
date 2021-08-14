import '../styles/search.component.css';

export const SearchComponent = ({onChange}) => {
  return (
      <input className="search__input" type="search" placeholder="Search Titles, Genres, Actors" onChange={onChange}/>
  )
}
