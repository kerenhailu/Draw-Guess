import React from 'react'
import Easy from '../../Features/Levels/easy-component'

export default function Words() {
  return (
    <div>Words
<h1>Select the level : </h1>
<button onClick={<Easy/>}>Easy</button><br/>
<button>Middle</button><br/>
<button>Hard</button>
    </div>
  )
}
