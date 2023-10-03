// Stylesheet
import '../../styles/ImageComponent.css';

const ImageComponent = ({selectedImage,signImages,color}) => {

  return (
    <div className="image-container" id='image-container'>
      <img src={selectedImage.src} alt="Your" className="image" />
      <div className={`sign-container ${color === 'white' ? '' : ' sign-container-color'}`}>
      {signImages.map((signImage,index) => {
        if(color === 'white'){
          if(signImage.title === 'adapter'){
            return <img key={index} src={signImage.src} alt={signImage.title} className='adapter'/>
          }else if(signImage.title === 'space'){
            return <img key={index} src={signImage.src} alt={signImage.title} className='space'/>
          }
          return (
            <img key={index} src={signImage.src} alt={signImage.title} 
                className={`letter ${signImage.title==='I' || signImage.title==='one' ? 'slim' : ''}`}
            />)
        }else{
          if(signImage.title === 'adapter'){
            return <img key={index} src={signImage.src} alt={signImage.title} className='adapter'/>
          }else if(signImage.title === 'space'){
            return <img key={index} src={signImage.src} alt={signImage.title} className='color-space'/>
          }
          return (
            <img key={index} src={signImage.src} alt={signImage.title} 
                className={`color-letter ${signImage.title==='I' || signImage.title==='one' ? 'slim' : ''}`}
            />)
        }
        }
      )}
      </div>
    </div>
  );
};

export default ImageComponent;
