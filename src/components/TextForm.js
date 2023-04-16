import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
       setText(newText.join(" "))
    }
    
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
    }
    const handleOnChange = (event)=>{
        setText(event.target.value); 
    }
    const [text, setText] = useState('Enter text Here');
    return (
        <>
        <div className="Container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"  value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Upper-Case</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lower-Case</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes reading Time</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
