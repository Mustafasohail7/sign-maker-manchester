//data 
import FeatureGridData from "../../data/FeatureGridData";
import FeatureGridItem from "./FeatureGridItem";

//stylesheet
import "../../styles/FeatureGrid.css";

const FeatureGrid = () => {
  return (
    <div className="feature-grid">
        {FeatureGridData.map((item) => (
            <FeatureGridItem key={item.id} item={item} />
        ))}
    </div>
  )
}

export default FeatureGrid
