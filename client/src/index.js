import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/index.css'
// import App from './App'
import Home from '../src/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CarRegister from './pages/CarRegister'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Router>
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="car-register" element={<CarRegister />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  </Router>
)
