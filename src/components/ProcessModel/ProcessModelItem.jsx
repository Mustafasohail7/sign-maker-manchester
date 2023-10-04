const ProcessModelItem = ({selectedProcess,setSelectedProcess,step}) => {
  return (
    <div
    className={`process-step ${selectedProcess === step.id ? "selected" : ""}`}
    onClick={() => setSelectedProcess(step.id)}
    >
        {step.image}
    </div>
  )
}

export default ProcessModelItem
