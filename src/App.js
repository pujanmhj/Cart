import React from 'react';
import Nav from './component/Nav'
import Home from './component/Home';
import Footer from './component/Footer'
import Contact from './Contact';
import Aboutus from './component/Aboutus';
import { Listofproduct } from './component/Listofproduct';

import { Routes, Route} from "react-router-dom";                                
function App() { 
  return (
    <div>
  <Nav></Nav>

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/listofproduct' element={<Listofproduct/>}/>
       <Route path='/about' element={<Aboutus/>} />
       <Route path='/contact' element={<Contact/>} />
      </Routes>
     
  <Footer></Footer>
    </div>
  );
}

export default App;
