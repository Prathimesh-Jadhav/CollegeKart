import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Registration from './pages/Registration'
import Details from './pages/Details'
import Navbar from './components/Navbar'
import Facilities from './pages/Facilities'

function App() {

  return (
    <div>
      <Router>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/facilities" element={<Facilities/>}/>
            <Route path="/facilities/:category" element={<Facilities />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/details" element={<Details />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App
