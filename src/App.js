import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const [mode,setMode] = useState('dark');
  const [alert,setAtlert] = useState(null);

  const showAlert = (message,type)=>{
        
    setAtlert({
      msg: message,
      type: type
    })

    setTimeout(()=>{setAtlert(null)},1500);
}


  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode enabled","success");
      document.title = 'React App Dark Mode';
    }
  
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode enabled","success");
      document.title = 'React App Light Mode';
    }
  }

  return (
    <>
    {/* <Router> */}
    <Navbar title="Navigation Bar" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

    <div className='container my-3' > 

         {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}
  
          {/* <Route exact path="/"> */}
          <TextForm heading="Enter the text" mode={mode}  showAlert = {showAlert}/>
          {/* </Route>
        </Switch>  */}
 
    </div>
    {/* </Router> */}
    </> 
  );
}

export default App;
