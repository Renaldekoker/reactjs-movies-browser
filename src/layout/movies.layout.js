import '../styles/movies.layout.css'

export const MoviesLayout = ({children}) => {
  return (
      <>
        <div className={'title'}>Movie Browser</div>
        <div className={'app-content'}>
          {children}
        </div>
      </>
  )
}
