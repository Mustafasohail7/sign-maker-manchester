const FeatureGridItem = ({item}) => {
  return (
    <div className="feature-grid-item" key={item.id}>
        {item.logo}
        <h3>{item.title}</h3>
        <p>{item.description}</p>
    </div>
  )
}

export default FeatureGridItem
