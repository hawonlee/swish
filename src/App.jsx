import './App.css'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage';

function App() {

  return (
    <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
    </>
  )
}

export default App
