import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Footer from './Components/footer'
import NavBar from './Components/navBar'
import Home from './Components/home'
import Projects from './Components/projects'
import Skills from './Components/skills'

// import './App.css'

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="#home" element={<Home />} />
          <Route path="#skills" element={<Skills />} />
          <Route path="#projects" element={<Projects />} />
          <Route path="#footer" element={<Footer />} />
        </Routes>
        <Home />
        <Skills />
        <Projects />
        <Footer />
      </Router>
    </>
  )
}

export default App
