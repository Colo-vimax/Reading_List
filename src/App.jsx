import React from 'react'


// components
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Signup />
      <Login />
    </div>
  )
}

export default App