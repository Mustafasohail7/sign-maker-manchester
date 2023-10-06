import '../../styles/SliderButton.css'

import { AiOutlineCheck } from 'react-icons/ai';


const SliderButton = ({name,stand,setStand}) => {

    const handleStandChange = () => {
        setStand(!stand);
    }

    return (
        <div className='checkbox-item'>
              <p>{name}</p>
              <label className={`checkbox-toggle ${stand ? 'checked' : ''}`}>
                <input type="checkbox" checked={stand} onChange={handleStandChange} />
                <span className="slider">
                  <span className="slider-icon">
                    <AiOutlineCheck />
                  </span>
                </span>
              </label>
        </div>
    );
};

export default SliderButton;
