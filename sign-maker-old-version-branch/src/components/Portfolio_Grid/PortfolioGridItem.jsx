const PortfolioGridItem = ({item}) => {
  return (
    <div className="portfolio-item" key={item.id}>
        <img src={item.image} alt={item.alt} />
    </div>
  )
}

export default PortfolioGridItem
