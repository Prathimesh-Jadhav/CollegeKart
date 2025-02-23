import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Registration from './pages/Registration'
import Details from './pages/Details'

function App() {

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/details" element={<Details />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
