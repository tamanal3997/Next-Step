import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Globalcomp/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import CareerPath from './Pages/CareerPath/CareerPath'
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';
import After12 from "./Pages/CareerPath/After12/After12";
import Science from './Pages/CareerPath/After12/science/science';
import Arts from './Pages/CareerPath/After12/Arts/Arts';
import Commerce from './Pages/CareerPath/After12/commerce/commerce';
import AfterGraduation from "./Pages/CareerPath/AfterGraduation/AfterGraduation";
import AI from "./AI";
import Footer from './Components/Globalcomp/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career-path" element={<CareerPath />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career-path/after-12" element={<After12 />} />
        <Route path="/career-path/after-12/science" element={<Science />} />
        <Route path="/career-path/after-12/commerce" element={<Commerce />} />
        <Route path="/career-path/after-12/Arts" element={<Arts />} />
        <Route path="/career-path/after-graduation" element={<AfterGraduation />}/>
         <Route path="/ai-assistant" element={<AI />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
