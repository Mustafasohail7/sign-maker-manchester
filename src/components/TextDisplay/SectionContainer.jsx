import { useState } from "react"

//right icon
import { AiOutlineArrowRight,AiOutlineArrowLeft } from 'react-icons/ai'

const SectionContainer = ({children}) => {

    const [currentSection,setCurrentSection] = useState(0);

    const isFirstSection = currentSection === 0;
    const isLastSection = currentSection === children.length - 1;

    const handleNext = () => {
        setCurrentSection((prev) => (prev+1)%children.length)
    }

    const handleBack = () => {
        setCurrentSection((prev) => (prev-1+children.length)%children.length)
    }

  return (
    <div className="section-container">
      <div className="content-container" >
        <button className={`next-btn ${isFirstSection ? 'disabled' : ''}`} onClick={handleBack} disabled={isFirstSection}>
          <AiOutlineArrowLeft/>
        </button>
        {children[currentSection]}
        <button className={`next-btn ${isLastSection ? 'disabled' : ''}`} onClick={handleNext} disabled={isLastSection}>
            <AiOutlineArrowRight/>
        </button>
      </div>
    </div>
  )
}

export default SectionContainer
