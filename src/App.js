import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    <>
<Navbar title= "TextUtils" mode={mode} toggleMode={toggleMode} />
<Alert alert = "This is alert"/>
<div className="container my-3">
<TextForm heading = "Enter the Text to Analyze Below"/>
{/* <About/> */}
</div>

    </>
  );
}

export default App;
