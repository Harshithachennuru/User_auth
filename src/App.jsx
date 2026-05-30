import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './components/login'
import Signup from './components/signup'
import Home from './components/home';
import AdminDashboard from './Components/AdminDashboard';
import UserDashboard from './Components/UserDashboard';

import './App.css'

const App = () => {
  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
        
        <Route path="/home" element={<Home />} />

        <Route path="/AdminDashboard" element = {<AdminDashboard/>}/>
        
        <Route path="/UserDashboard" element = {<UserDashboard/>}/>

      </Routes>

    </BrowserRouter>

  )
}

export default App