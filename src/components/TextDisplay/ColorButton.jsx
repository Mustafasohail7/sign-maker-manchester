import { useEffect } from "react";

const ColorButton = ({color,name,selectedColor,setSelectedColor,render,text}) => {

  useEffect(() => {
    render(text)
  },[selectedColor,render,text])

    //change color
    const handleColorButton = (buttonId) => {
        setSelectedColor(buttonId);
    }

  return (
    <button 
    className={`font-btn ${selectedColor === `${name}` ? 'selected' : ''}`}
    style={{backgroundColor: `${color}`}}
    onClick={() => handleColorButton(name)}
    >
        {name}
    </button>
  )
}

export default ColorButton
