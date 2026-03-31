
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {


  return (
    
      <div >
 <div className='p-5 md:px-[15%]'>
  < Navbar/>
 < Home />
 </div>
  <About/>
  <Skills/>
  < Projects />
  < Footer />
    </div>
    
  )
}

export default App
