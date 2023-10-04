//stylesheet
import '../styles/ImageSelector.css'

//data
import images from '../data/images'

const ImageSelector = ({selectedImage,setSelectedImage}) => {

    const handleImageClick = (image) => {
        setSelectedImage(image)
    }

  return (
    <div className='img-selector'>
      {images.map((image) => (
        <img src={image.src} alt={image.title} key={image.id} 
            onClick={() => handleImageClick(image)}
            className={`img-selector-img ${selectedImage.id === image.id ? 'selected' : ''}`}
        />
      ))}
    </div>
  )
}

export default ImageSelector
