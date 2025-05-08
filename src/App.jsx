import { useState } from 'react'

import './App.css'
import DerivedState from './components/DerivedState';
import ToggleSwitch from './projects/ToggleSwitch';

function App() {
//  const [count,setcount] = useState(0);
//  const handleButtonClick = () =>{
//   setcount(() => count + 1);
//  }

  return (
    <>
     {/* <section className="main-div">
      <h1>{count}</h1>
      <button onClick={handleButtonClick}>Increment</button>

<DerivedState/>
     </section> */}
     <ToggleSwitch/>
    </>
  )
}

export default App
