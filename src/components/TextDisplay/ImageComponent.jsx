// Stylesheet
import '../../styles/ImageComponent.css';

const ImageComponent = ({selectedImage,signImages,size,color}) => {

  const sizeClass = size === '50 mm' ? 'small' : 'large'

  return (
    <div className="image-container" id='image-container'>
      <img src={selectedImage.src} alt="Your" className="image" />
      <div className={`sign-container ${color === 'white' ? '' : ' sign-container-color'}`}>
      {signImages.map((signImage,index) => {
        if(color === 'white'){
          if(signImage.title === 'adapter'){
            return <img key={index} src={signImage.src} alt={signImage.title} className={`adapter ${sizeClass}`}/>
          }else if(signImage.title === 'space'){
            return <img key={index} src={signImage.src} alt={signImage.title} className={`space ${sizeClass}`}/>
          }
          return (
            <img key={index} src={signImage.src} alt={signImage.title} 
                className={`letter ${sizeClass} ${signImage.title==='I' || signImage.title==='one' ? 'slim' : ''}`}
            />)
        }else{
          if(signImage.title === 'adapter'){
            return <img key={index} src={signImage.src} alt={signImage.title} className={`adapter ${sizeClass}`}/>
          }else if(signImage.title === 'space'){
            return <img key={index} src={signImage.src} alt={signImage.title} className={`color-space ${sizeClass}`}/>
          }
          return (
            <img key={index} src={signImage.src} alt={signImage.title} 
                className={`color-letter ${sizeClass} ${signImage.title==='I' || signImage.title==='one' ? 'slim' : ''}`}
            />)
        }
        }
      )}
      </div>
    </div>
  );
};

export default ImageComponent;
