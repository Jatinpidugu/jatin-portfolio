import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TechnicalProficiency from './sections/TechnicalProficiency'
import AboutMe from './sections/AboutMe'
import MyProjects from './sections/MyProjects'
import ContactMe from './sections/ContactMe'
import Footer from './sections/Footer'
import Certificate from './sections/Certificate'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <TechnicalProficiency/>
      <AboutMe/>
      <MyProjects/>
      <ContactMe />
      <Certificate/>
      <Footer/>
    </div>
  )
}

export default App
