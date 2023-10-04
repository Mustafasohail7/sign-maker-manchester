//stylesheet
import '../styles/Graphic.css'

import img from '../assets/ripoff.png'

const Graphic = () => {
  return (
    <div className='graphic-container'>
      <img src={img} alt='Custom Magnetic'/>
    </div>
  )
}

export default Graphic
