import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from "./Components/Header"
import Hero from "./Components/Hero"


function App() {
  const [count, setCount] = useState(0)

  return(
    <div className='min-h-screen bg-gradient-to-tr from-[#60072c] via black to-[#091498] px-8 md:px-14 lg:px-36 pb-10 pt-10 pt-7'>
      
        <Header/>
        <Hero/>
      
      </div>
      
  )
}

export default App
