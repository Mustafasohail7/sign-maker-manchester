// Stylesheet
import '../../styles/ImageComponent.css';

const ImageComponent = ({selectedImage,signImages,size,color}) => {

  const sizeClass = size === '50 mm' ? 'small' : 'large'

  return (
    <div className="image-container" id='image-container'>
      <img src={selectedImage.src} alt="Your" className="image" />
      <div className="sign-container">
      {signImages.map((signImage,index) => {
          if(signImage.title === 'adapter'){
            return <img key={index} src={signImage.src} alt={signImage.title} className={`adapter ${sizeClass}`}/>
          }else if(signImage.title === 'space'){
            return <img key={index} src={signImage.src} alt={signImage.title} className={`space ${sizeClass}`}/>
          }
          return (
            <img key={index} src={signImage.src} alt={signImage.title} 
                className={`letter ${sizeClass} ${signImage.title==='I' || signImage.title==='one' ? 'slim' : ''}`}
            />)
      }
      )}
      </div>
    </div>
  );
};

export default ImageComponent;
