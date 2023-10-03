import { useState, useLayoutEffect } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';

//stylesheet
import '../../styles/Options.css';

//components
import SectionContainer from './SectionContainer';
import SizeButton from './SizeButton';
import ColorButton from './ColorButton';

const Options = ({size,setSize,color,setColor,render,text}) => {

  const SizeData = [
    {id: 1, name: '50 mm'},
    {id: 2, name: '75 mm'},
    // {id: 3, name: '100 mm'},
    // {id: 4, name: '125 mm'},
    // {id: 5, name: '150 mm'},
    // {id: 6, name: '175 mm'},
    // {id: 7, name: '200 mm'},
  ]

  const ColorData = [
    // {id: 1, name: 'pink', color: '#c23291'},
    {id: 2, name: 'red', color: '#da252a'},
    // {id: 3, name: 'chrome yellow', color: '#d1913a'},
    // {id: 4, name: 'pumpkin orange', color: '#e46c4a'},
    // {id: 5, name: 'light green', color: '#73c259'},
    // {id: 6, name: 'meadow green', color: '#309867'},
    // {id: 7, name: 'aqua', color: '#2da3a7'},
    // {id: 8, name: 'reflex blue', color: '#2d3b7c'},
    // {id: 9, name: 'black', color: '#454648'},
    {id: 10, name: 'white', color: '#B9B1B1'}
  ]

  const [stand, setStand] = useState(false);
  const [plug, setPlug] = useState(false);
  const [plug2,setPlug2] = useState(false);
  const [wrap,setWrap] = useState(false);
  
  //change section layout
  const handleSection = () => {
    if(window.innerWidth > 980) {
      setWrap(false);
    } else {
      setWrap(true);
    }
  }

  //toggle stand
  const handleStandToggle = () => {
    setStand(!stand);
  }

  //toggle plug
  const handlePlugToggle = () => {
    setPlug(!plug)
    if(plug2 && !plug) setPlug2(false)
  }
  
  //toggle plug2
  const handlePlugTwoToggle = () => {
    setPlug2(!plug2)
    if(plug && !plug2) setPlug(false)
  }
console.log(size)

  //resize event listener
  useLayoutEffect(() => {

    handleSection();

    window.addEventListener('resize',handleSection)

    return () => {
        window.removeEventListener('resize',handleSection)
    }
  },[])

  return (
    <>
    {wrap ? (
      <SectionContainer>

      <div className="section">
        <h2 className="section-heading">Choose Size</h2>
        <div className="options">
          {SizeData.map((sizeData) => (
            <SizeButton key={sizeData.id} size={size} setSize={setSize} name={sizeData.name} />
          ))}
        </div>

      </div>

      <div className="section">
        <h2 className="section-heading">Choose Color</h2>
        <div className="options">
          {ColorData.map((colorData) => (
            <ColorButton key={colorData.id} name={colorData.name} color={colorData.color} selectedColor={color} setSelectedColor={setColor} render={render} text={text}/>
          ))}
        </div>
      </div>

      <div className="section add-to-cart">
      <div className='checkbox-holder'>
            <div className='checkbox-item'>
              <p>Include Stand</p>
              <label className={`checkbox-toggle ${stand ? 'checked' : ''}`}>
                <input type="checkbox" checked={stand} onChange={handleStandToggle} />
                <span className="slider">
                  <span className="slider-icon">
                    <AiOutlineCheck />
                  </span>
                </span>
              </label>
            </div>
            <div className='checkbox-item'>
              <p>Include Adapter</p>
              <label className={`checkbox-toggle ${plug ? 'checked' : ''}`}>
                <input type="checkbox" checked={plug} onChange={handlePlugToggle} />
                <span className="slider">
                  <span className="slider-icon">
                    <AiOutlineCheck />
                  </span>
                </span>
              </label>
            </div>
            <div className='checkbox-item'>
              <p>Include Adapter 2</p>
              <label className={`checkbox-toggle ${plug2 ? 'checked' : ''}`}>
                <input type="checkbox" checked={plug2} onChange={handlePlugTwoToggle} />
                <span className="slider">
                  <span className="slider-icon">
                    <AiOutlineCheck />
                  </span>
                </span>
              </label>
            </div>
          </div>
          <button className="cart-btn">ADD TO CART</button>
      </div>

    </SectionContainer>
    ) : (
      <div className='content-container'>

      <div className="section">
        <h2 className="section-heading">Choose Size</h2>
        <div className="options">
          {SizeData.map((sizeData) => (
            <SizeButton key={sizeData.id} size={size} setSize={setSize} name={sizeData.name} />
          ))}
        </div>

      </div>

      <div className="section">
        <h2 className="section-heading">Choose Color</h2>
        <div className="options">
          {ColorData.map((colorData) => (
            <ColorButton key={colorData.id} name={colorData.name} color={colorData.color} selectedColor={color} setSelectedColor={setColor} render={render} text={text}/>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="options">
          {/* <label className="checkbox-container">
            <input
              type="checkbox"
              checked={stand}
              onChange={() => setStand(!stand)}
            />
            <span className="checkmark"></span>
            <span className="label-text">Include Stand</span>
          </label> */}
          <div className='checkbox-holder'>
            <div className='checkbox-item'>
              <p>Include Stand</p>
              <label className={`checkbox-toggle ${stand ? 'checked' : ''}`}>
                <input type="checkbox" checked={stand} onChange={handleStandToggle} />
                <span className="slider">
                  <span className="slider-icon">
                    <AiOutlineCheck />
                  </span>
                </span>
              </label>
            </div>
            <div className='checkbox-item'>
              <p>Include Adapter</p>
              <label className={`checkbox-toggle ${plug ? 'checked' : ''}`}>
                <input type="checkbox" checked={plug} onChange={handlePlugToggle} />
                <span className="slider">
                  <span className="slider-icon">
                    <AiOutlineCheck />
                  </span>
                </span>
              </label>
            </div>
            <div className='checkbox-item'>
              <p>Include Adapter 2</p>
              <label className={`checkbox-toggle ${plug2 ? 'checked' : ''}`}>
                <input type="checkbox" checked={plug2} onChange={handlePlugTwoToggle} />
                <span className="slider">
                  <span className="slider-icon">
                    <AiOutlineCheck />
                  </span>
                </span>
              </label>
            </div>
          </div>
          <button className="cart-btn">ADD TO CART</button>
        </div>
      </div>

      </div>
    )}
    </>
  );
};

export default Options;
