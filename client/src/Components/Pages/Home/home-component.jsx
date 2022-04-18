import React from 'react'
import Guess from '../Guess/guess-component'
import './home.css'
export default function Home() {
  return (
    <div>
<h1>Welcome To Guess & Draw </h1>
<button onClick={()=><Guess/>}>click to Guess</button> <br/>
<button>click to Draw</button>
<br/>
<img src='https://monophy.com/media/hC3e34vzwAW9a7a5X0/monophy.gif'
alt='draw'/>
    </div>
  )
}
