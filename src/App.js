import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

// import About from './components/About';

function App() {
  const [mode, setMode] = useState('dark');
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode('light');
    }
  }
  return (
    <>
<Navbar title= "TextUtils" mode={mode} toggleMode={toggleMode} />
<div className="container my-3">
<TextForm heading = "Enter the Text to Analyze Below"/>
{/* <About/> */}
</div>

    </>
  );
}

export default App;
