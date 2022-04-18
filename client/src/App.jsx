import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageRouting from './Components/Routing/pageRouting';
import Home from './Components/Pages/Home/home-component'
import Draw from './Components/Pages/Draw/draw-component';
import Guess from './Components/Pages/Guess/guess-component';
import Words from './Components/Pages/Words/words-component';

function App() {
  return (
    <div className="App">
      {/* <PageRouting/> */}
      {/* <Home/> */}
      <Draw/>
      {/* <Guess/> */}
      {/* <Words/> */}
    </div>
  );
}

export default App;
