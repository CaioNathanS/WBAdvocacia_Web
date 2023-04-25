import React from 'react';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import {HomePage} from './pages/HomePage'



export default function Roots (){
    return(
        <Router>
      
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<HomePage/>} />
          </Routes>
   
        </Router>
    );

}