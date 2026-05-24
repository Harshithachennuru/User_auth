import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './components/login'
import Signup from './components/signup'
import Home from './components/home';

import './App.css'

const App = () => {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
        
        <Route path="/home" element={<Home />} />

      </Routes>

    </BrowserRouter>

  )
}

export default App