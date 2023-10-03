const ProcessModelListItem = ({process}) => {
  return (
    <div className='process-list-item'>
        <div className='process-logo'>
            {process.image}
            <h2>{process.title}</h2>
        </div>
        <div className='process-text'> 
            <p>{process.text}</p>
        </div>
    </div>
  )
}

export default ProcessModelListItem
