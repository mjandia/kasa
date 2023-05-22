import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Propos from './Propos'
import React from 'react'
import NotFound from './NotFound'
import LogementPageProduit from "./LogementPageProduit"


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="propos" element={<Propos />} />
        <Route path="logement/:id" element={<LogementPageProduit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
export default App

