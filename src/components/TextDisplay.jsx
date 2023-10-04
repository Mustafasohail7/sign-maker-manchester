import { useState, useCallback } from 'react'

//images
// import bg from '../assets/picture.png'
import BG from '../assets/BG.png'

//components
import TagLine from './TextDisplay/TagLine'
import TextPreviewer from './TextDisplay/TextPreviewer'
import ImageComponent from './TextDisplay/ImageComponent'
import Options from './TextDisplay/Options'

import '../styles/TextDisplay.css'

// import adapterImage from '../assets/ZZadapter.png'

// import letters_white from '../data/straightLetterData'
// import letters_pink from '../data/pinkletterData'
// import letters_red from '../data/redletterData'
import letters_yellow from '../data/yellowletterData'
import letters_orange from '../data/orangeletterData'
import letters_lgreen from '../data/lgreenletterData'
import letters_green from '../data/greenletterData'
import letters_lblue from '../data/lblueletterData'
import letters_blue from '../data/blueletterData'
import letters_black from '../data/blackletterData'
import letters_manchester from '../data/manchesterLetterData'
import letters_manchester_red from '../data/manchesterRedLetterData'

const TextDisplay = () => {

    const selectedImage = {id: 2, title: "Background 1" ,src: BG}
    const [userText,setUserText] = useState('Drag Me')
    const [size, setSize] = useState('50 mm');
    // const [color,setColor] = useState('red');
    const [signImages,setSignImages] = useState([])
    const [color,setColor] = useState('white');
    const [text,setText] = useState('')

    var letters

  const renderSigns = useCallback((newText) => {

    let letter_signs = []

    // console.log('rendering')
    
    if(color === 'white'){
      // eslint-disable-next-line
      letters = letters_manchester
      letter_signs.push(letters.find(
        (letter) => letter.title === 'adapter'
      ))
      // letter_signs.push(adapter)
    }else if(color === 'pink'){
      letters = letters_manchester
    }else if(color === 'red'){
      // letters = letters_red
      letters = letters_manchester_red
      letter_signs.push(letters.find(
        (letter) => letter.title === 'adapter'
      ))
    }else if(color === 'chrome yellow'){
      letters = letters_yellow
    }else if(color === 'pumpkin orange'){
      letters = letters_orange
    }else if(color === 'light green'){
      letters = letters_lgreen
    }else if(color === 'meadow green'){
      letters = letters_green
    }else if(color === 'aqua'){
      letters = letters_lblue
    }else if(color === 'reflex blue'){
      letters = letters_blue
    }else if(color === 'black'){
      letters = letters_black
    }

    for (const char of newText.toUpperCase()){
      let matchingLetter
      console.log('here')
      if(char === ' '){
        matchingLetter = letters.find(
          (letter) => letter.title === 'space'
        )
      }else{
        console.log('finding')
        matchingLetter = letters.find(
          (letter) => letter.title === `${char}`
        )
      }
      if(matchingLetter) {
        letter_signs.push(matchingLetter)
      }
    }
    setSignImages(letter_signs)
  },[color])

  return (
    <>
    <div className="component">
        <TagLine/>
        <TextPreviewer setUserText={setUserText} setSignImages={setSignImages} color={color} render={renderSigns} text={text} setText={setText}/>
    </div>
    <div className="function-container">
        <div className="component-left">
          <ImageComponent signImages={signImages} userText={userText} selectedImage={selectedImage} size={size} color={color}/>
        </div>
        <div className='component-right' >
          <Options size={size} setSize={setSize} color={color} setColor={setColor} render={renderSigns} text={text}/>
        </div>
    </div>
    </>
  )
}

export default TextDisplay
