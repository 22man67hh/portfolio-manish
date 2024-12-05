import React from 'react'
import"./App.css";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Services from './Components/Services/Services';
import Qualification from './Components/qualification/Qualification';
import COntact from './Components/Contact/COntact';
import Footer from './Components/Footer/Footer';
import Project from './Components/Project/project';
import ScrollUp from './Components/Scrollup/ScrollUp';
export default function App() {
  return (
    <div>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <Skills/>
      <Project/>
        <Services/>
        <Qualification/>
        <COntact/>
        
        
      </main>
      <Footer/>
      <ScrollUp/>
    </div>
  )
}
