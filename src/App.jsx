import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Error404 from './pages/error404/Error404'
import './app.scss'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App