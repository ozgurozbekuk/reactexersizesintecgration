import "./trafficlights.css";
import { useEffect, useState } from "react";

export default function TrafficLight(){
    const [currentLight,setCurrentLight] = useState('')
    const [index,setIndex] = useState(0)
    const colors = ["red","orange","green"];
    
    useEffect(() => {
        setCurrentLight(document.getElementById(colors[index]))
    },[handleClick])
    
    

    

    function handleClick() {
        
        if(index < colors.length-1) {
            setIndex(index + 1)
        }else {
            setIndex(0)
        }
        
        const lights = document.querySelectorAll('.sign')
        lights.forEach((light) => {
            light.classList.remove('active')
        })
        if(currentLight.classList.contains('active')){
            currentLight.classList.remove('active')
        }else{
            currentLight.classList.add('active')
        }
        
    }
    
  
  return (
    <div>
      
      <div id="red" className="sign"></div>
      <div id="orange" className="sign"></div>
      <div id="green" className="sign" ></div>
      <button onClick={handleClick}>Next Light</button>
    </div>
  )
}

