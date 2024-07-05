import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React,{ useState } from 'react';


function App() {
  const [mode,setMode] =useState('light');
  const [alert,setAlert]= useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey'
      showAlert("Dark mode has been enabled","success")
    }
    else{
      setMode('light');
       document.body.style.backgroundColor='white'
       showAlert("Light mode has been enabled","success")
    }
  }

  return (
    <>
    <Navbar title="Text Utils" about ="About" mode={mode} toggleMode={toggleMode} />
    <Alert user="Mukhul" alert ={alert}/>
    <div className='container my-3' >
    <Textform showAlert ={showAlert} heading ="Enter text here to play around :" />
    </div>
    </>
  );
}

export default App;
