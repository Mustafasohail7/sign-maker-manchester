import '../../styles/ProcessModelList.css'

import processData from '../../data/processData'
import ProcessModelListItem from './ProcessModelListItem'

const ProcessModelList = ({shrink}) => {
  return (
    <div className={`process-list-container ${shrink ? "" : "hide"}`}>
      <div className='process-list'>
        {processData.map((process) => (
          <ProcessModelListItem key={process.id} process={process} />
        ))}
      </div>
    </div>
  )
}

export default ProcessModelList
