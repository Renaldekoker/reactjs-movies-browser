import '../styles/view-mode.component.css';

export const ViewModeComponent = ({onChange, viewMode}) => {
  return (
      <div className={'view-mode-wrapper'}>
        <img onClick={() => onChange('grid')} className={viewMode === 'grid' ? 'active' : ''} src={'grid.png'} alt="view mode grid"/>
        <img onClick={() => onChange('list')} className={viewMode === 'list' ? 'active' : ''} src={'list.png'} alt="view mode list"/>
      </div>
  )
}
