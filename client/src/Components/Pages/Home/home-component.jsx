import React, { useState } from 'react'
import Draw from '../Draw/draw-component';
import Guess from '../Guess/guess-component'
import './home.css'
export default function Home() {
  let [guess , setGuess] = useState(true) ;

   const changeComponent = () => {
    setGuess(!guess);

   }
   let [darw , setDraw] = useState(true) ;

   const changeComponentDraw = () => {
    setDraw(!darw);

   }
  return (
    <div>
<h1>Welcome To Guess & Draw </h1>
{/* <button className="cntcToggleBtn" onClick={changeComponent}> {guess ? "Guess" : "Home Page"}  </button>
       {
           guess ? <Home/> :  <Guess/>
       }
<br/>
<button className="cntcToggleBtn" onClick={changeComponentDraw}> {darw ? "Draw" : "Home Page"}  </button>
       {
           darw ?<Home/> :  <Draw/>
       }
<br/> */}

<img src='https://monophy.com/media/hC3e34vzwAW9a7a5X0/monophy.gif'
alt='draw'/>
    </div>
  )
}
