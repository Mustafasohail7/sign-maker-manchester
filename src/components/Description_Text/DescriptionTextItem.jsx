const DescriptionTextItem = ({item}) => {
  return (
    <div className="desc_item" key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
    </div>
  )
}

export default DescriptionTextItem
