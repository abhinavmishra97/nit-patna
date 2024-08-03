import React from 'react'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Home from './components/home/Home'
import Theme from './components/themes/Theme'
import Dates from './components/dates/Dates'
import Committee from './components/committee/Committee'
import Fees from './components/fees/Fees'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Home />
      <About />
      <Theme />
      <Dates />
      <Committee />
      <Fees />
    </div>
  )
}

export default App