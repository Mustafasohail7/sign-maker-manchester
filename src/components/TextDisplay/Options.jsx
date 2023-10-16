import { useState, useLayoutEffect } from 'react';

//stylesheet
import '../../styles/Options.css';

//components
import SectionContainer from './SectionContainer';
import SizeButton from './SizeButton';
import ColorButton from './ColorButton';
import SliderButton from './SliderButton';

const Options = ({size,setSize,color,setColor,render,text,setText,setOrder}) => {

  const SizeData = [
    {id: 1, name: '50mm'},
    {id: 2, name: '75mm'},
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

  const [windowStand, setWindowStand] = useState(false);
  const [wallStand, setWallStand] = useState(false);
  const [plug, setPlug] = useState(false);
  const [plug2,setPlug2] = useState(false);
  const [plug3,setPlug3] = useState(false);
  const [wrap,setWrap] = useState(false);
  const [added,setAdded] = useState(false)
  
  //change section layout
  const handleSection = () => {
    if(window.innerWidth > 980) {
      setWrap(false);
    } else {
      setWrap(true);
    }
  }

  const handleAddOrder = () => {
    setAdded(true)
    setOrder((prevOrder) => [...prevOrder,{
      id: Date.now(),
      size,
      color,
      stand1: wallStand,
      stand2: windowStand,
      adapter1: plug,
      adapter2: plug2,
      adapter3: plug3,
      text,
    }])
    setText('')
    setTimeout(() => {
      setAdded(false)
    },2000)
  }

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

      <div className='section'>
      <div className='checkbox-holder'>
            <div className='checkbox-holder-inside'>
              <p>Include Stands</p>
              <SliderButton name="Wall Stand" stand={wallStand} setStand={setWallStand}/>
              <SliderButton name="Window Stand" stand={windowStand} setStand={setWindowStand}/>
            </div>
      </div>
      </div>

      <div className="section add-to-cart">
            <div className='checkbox-holder'>
            <div className='checkbox-holder-inside'>
              <p>Include Adapters</p>
              <SliderButton name="Adapter 1" stand={plug} setStand={setPlug}/>
              <SliderButton name="Adapter 2" stand={plug2} setStand={setPlug2}/>
              <SliderButton name="Adapter 3" stand={plug3} setStand={setPlug3}/>
            </div>
            </div>
          <button className={`cart-btn ${added ? 'green' : ''}`} onClick={handleAddOrder}>{added ? 'added to cart!' : 'add to cart'}</button>
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
          <div className='checkbox-holder'>
            <div className='checkbox-holder-inside'>
              <p>Include Stands</p>
              <SliderButton name="Wall Stand" stand={wallStand} setStand={setWallStand}/>
              <SliderButton name="Window Stand" stand={windowStand} setStand={setWindowStand}/>
            </div>
            <div className='checkbox-holder-inside'>
              <p>Include Adapters</p>
              <SliderButton name="Adapter 1" stand={plug} setStand={setPlug}/>
              <SliderButton name="Adapter 2" stand={plug2} setStand={setPlug2}/>
              <SliderButton name="Adapter 3" stand={plug3} setStand={setPlug3}/>
            </div>
          </div>
          <button className={`cart-btn ${added ? 'green' : ''}`} onClick={handleAddOrder}>{added ? 'added to cart!' : 'add to cart'}</button>
        </div>
      </div>

      </div>
    )}
    </>
  );
};

export default Options;
