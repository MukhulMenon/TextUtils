import React,{useState} from 'react'

function Textform(props) {
    const [text,setText]= useState('');

    const handleUpClick =()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLowClick =()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }
    const hancleClrClick =()=>{
      let newText = '';
      setText(newText)
      props.showAlert("Text Cleared","success")
  }
  const handleCpyClick =()=>{
    let text = document.getElementById("my-box");
    text.select();
    text.setSelectionRange(0,999999);
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to clipboard!","success")
}

    const handleOnChange =(event)=>{
        console.log("change was triggered");
        setText(event.target.value);
    }
  return (
    <div>
      <form>
        <div className='container'>
        <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">{props.heading}</label>
        <textarea type="box" className='form-control' id='my-box' onChange={handleOnChange} value={text} rows="8"/>
        </div>
        
        <button type="button" className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleCpyClick}>Copy text</button>
        <button type="button" className="btn btn-primary mx-3" onClick={hancleClrClick}>Clear text</button>

        <div className='container my-3'>
            <h4>Your text summary</h4>
            <p>{text.split(" ").length-1} words , {text.length} characters</p>
            <p> {(text.split(" ").length)*0.008} minutes to read</p>
            <h3> Preview </h3>
            <p>{text===''?"Enter text to preview here.":text}</p>
        </div>
        <div>

        </div>
        </div>
     </form>
    </div>
  )
}

export default Textform
