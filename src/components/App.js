import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Propos from './Propos'
import React from 'react'


function App() {
  <div className="App">
      <Routes>

        <Route path="/" element={ <Home/> } />
        <Route path="home" element={<Home />} />
        <Route path="propos" element={ <Propos/> } />
        
      </Routes>
    </div>
}
export default App

