import { useState } from 'react'

import ProcessModel from './ProcessModel/ProcessModel'
import ProcessText from './ProcessModel/ProcessText'
import ProcessModelList from './ProcessModel/ProcessModelList'

import '../styles/ProcessModelMain.css'

const ProcessModelMain = () => {

    const [shrink,setShrink] = useState(false)

  return (
    <div className='process-container'>
        <ProcessModel shrink={shrink} setShrink={setShrink} />
        <ProcessText />
        {shrink && <ProcessModelList shrink={shrink} />}
    </div>
  )
}

export default ProcessModelMain
