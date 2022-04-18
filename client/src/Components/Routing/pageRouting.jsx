// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../Features/Footer/footer-component";
import Navbar from "../Features/Navbar/navbar-component";
import Draw from "../Pages/Draw/draw-component";
import Guess from "../Pages/Guess/guess-component";
import Home from "../Pages/Home/home-component";
import Waiting from "../Pages/Waiting/waiting-component";
import Words from "../Pages/Words/words-component";

const PageRouting = () => {

  return (
    <div> 

      
      {/* <BrowserRouter>
     <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/guess" element={<Guess />}/>
          <Route exact path="/draw" element={<Draw />}/>
          <Route exact path="/words" element={<Words />}/>
          <Route exact path="/waiting" element={<Waiting />}/>
        </Routes>
        <Footer/>
      </BrowserRouter> */}


     </div> 
  );
};
export default PageRouting;
