import React from 'react'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Home from './components/home/Home'
import Theme from './components/themes/Theme'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Theme />
    </div>
  )
}

export default App