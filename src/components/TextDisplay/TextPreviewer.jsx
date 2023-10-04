//stylesheet
import '../../styles/TextPreviewer.css'

const TextPreviewer = ({setUserText,setSignImages,color,render,text,setText}) => {

  const handleChange = (e) => {
    const newText = e.target.value
    setText(newText)
    render(newText)
  }

  return (
    <div className="text-previewer-container">
      <h2 className="text-previewer-title">Enter your text</h2>
      <textarea
        className="text-previewer-textbox"
        value={text}
        onChange={handleChange}
        placeholder='ENTER TEXT HERE'
        rows={3}
        maxLength={100} //fix maxlength
      />
    </div>
  )
}

export default TextPreviewer
