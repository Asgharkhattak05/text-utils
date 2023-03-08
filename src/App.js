import React, { useState } from "react";
import About from "./component/About";
import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import "./index.css"

const App = () => {

  const [mode,setMode]=useState("light");
  const [alert ,setAlert]=useState();

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="gray";
      showAlert("Dark Mode Have Been Activated Succesfully")
      
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white"
      showAlert("Light Mode Have Been Activated Succesfully")
    }
  }
  const showAlert=(message,type)=>{
       setAlert({
        msg:message ,
        type:type
       })
  }

  return (
    <>
    <Navbar title ="TextUtlis" home="Home" about="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert  alert="This Is Alert"/>
    <div className="container">
    <TextForm  textbox="Enter The Text To Analyze" mode={mode}/>
    </div>

    {/* <div className="my-5">
    <About />
    </div> */}
    </>
  );
};



export default App;

