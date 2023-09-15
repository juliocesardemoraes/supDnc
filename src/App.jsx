import { useState } from 'react'

import './App.css'
import Footer from './componentes/section/Footer'
import Navbar from './componentes/section/Navbar'
import Presentation from './componentes/section/Presentation'
import Skills from './componentes/section/Skills'
import Projects from './componentes/section/Projects'




function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <Navbar></Navbar>
     <Presentation></Presentation>
     <Skills></Skills>
     <Projects></Projects>
     <Footer></Footer>
   </div>
  )
}

export default App
