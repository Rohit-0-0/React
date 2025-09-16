import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'
import Singlecard from './pages/Singlecard'
import Mycart from './pages/Mycart'
import Signup from './pages/Signup'
import Navbar from './pages/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />} >
        <Route  index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MycaRt" element={<Mycart />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Singlecard" element={<Singlecard />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App
