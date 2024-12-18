// import logo from './logo.svg';
import Navbar from './component/Navbar';
import TextFrom from './component/TextFrom';
import './App.css';
import React,{useState} from 'react';
import Alert from './component/Alert';
import About from './component/About';
//imrs
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  

  const [alert, setalert] = useState(null);


  const showAlert = (message,type)=>{
       setalert({
        msg : message,
        type : type
       })

       setTimeout(() => {
        setalert(null);
       }, 2000);
  }

 


  const toggleMode =() =>{
    if(mode === 'light')
    {
      
      setMode('dark');
     
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success");
      document.title ='TextUtils - Dark Mode';

      setInterval(() => {
        document.title ='TextUtils  is Amazing Mode';
      }, 2000);

      setInterval(() => {
        document.title =' Install TextUtils Now';
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light Mode has been enabled","success");
      document.title ='TextUtils - light Mode';
    }
  }

   
  
  return ( 
   
<>
<Router>

<Navbar title="TextUtils" aboutText="About " mode={mode} toggleMode={toggleMode} />

<Alert alert={alert}/>

<div className="container my-3 " >
<Routes>
          <Route  exact path="/about" element={<About/>}>
           
          </Route>
          {/* <Route  exact path="/" element={<TextFrom/>}>
          
          </Route> */}
         
          <Route exact path="/home" element={<TextFrom showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
          {/* <TextFrom heading="Enter the text to analyze below"  showAlert={showAlert} mode={mode}  /> */}
          </Route>
        </Routes>



</div>
</Router>
</>


    
  );
}

export default App;
