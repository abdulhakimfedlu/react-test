import React from 'react'
import Navbar from './components/navbar'
import Signup from './components/signup'
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
      <Signup />
    </div>
  )
}

export default App
