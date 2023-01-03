import "./style.css"
import React,{useState} from 'react';
import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import fig from "./assets/image3.jpeg";
import gaze from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import avacado from "./assets/image6.jpeg";

const images=[cabbage,mango,fig,gaze,peach,avacado];
//const handleClick =()=>{
 // alert("hello world")
//}
//const handleChange = (event) =>{
 // console.log(event.target.value)
//}
const App=()=>{     //can use "function App(){}"instead of const
const[currentImage, setCurrentImage] =useState(0)

const handleClick=()=>{
  setCurrentImage((currentImage) =>{
    if(currentImage <images.length -1){
      //do something
      return currentImage +1;
    }
    else{
      //do something
      return 0;
    }
  })

}
  return(
    <div className="App">
      <div className="title">
        <h1>Models</h1>
        <h2>A Photography Project<br/>Suryapriya</h2>
          </div>
      
      <div className="image-container">
        <h3>{currentImage +1}/ {images.length}</h3>
        <img src={images[currentImage]} alt="slide" onClick=
        {handleClick}/>

      </div>
    </div>
  );

}

export default App;
