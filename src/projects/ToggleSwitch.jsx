import { useState } from "react"
import "./ToggleSwitch.css"
const ToggleSwitch = () => {
   const[isOn,setIsOn] = useState(false);

   const handleToggleSwitch = () =>{
    setIsOn(prev => !prev);
   }
  return(
    <div className="toggle-Container">
      <div className={`toggle-switch ${isOn ? "on" : "off"}`} onClick={handleToggleSwitch}>
        <span className="toggle-circle">{isOn ? 'ON' : 'OFF'}</span>
        <p className="toggle-status"></p>
      </div>
      
    </div>
  )
}
export default ToggleSwitch;