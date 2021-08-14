import '../styles/filter.component.css';
export const FilterComponent = ({viewModeComponent, searchComponent}) => {
  return (
      <div className={'filter-wrapper'}>
        <div className={'view-mode-component'}>
          {viewModeComponent}
        </div>
        <div className={'search-component'}>
          {searchComponent}
        </div>
      </div>
  )
}
