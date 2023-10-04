//stylesheet
import '../../styles/DescriptionText.css';

//data
import DescriptionTextData from '../../data/DescriptionText'
import DescriptionTextItem from './DescriptionTextItem';

const DescriptionText = () => {
  return (
    <div className="desc_text_container">
        {DescriptionTextData.map((item) => (
            <DescriptionTextItem key={item.id} item={item} />
        ))}
    </div>
  )
}

export default DescriptionText
