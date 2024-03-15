import React from 'react'
import Navbar from './Components /Navbar'
import About from './Components /About'
import Cards from './Components /cards'
import Num from './Components /num'




const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <About />
      <Cards />
      <Num />

      
    </React.Fragment>
  )
}

export default App