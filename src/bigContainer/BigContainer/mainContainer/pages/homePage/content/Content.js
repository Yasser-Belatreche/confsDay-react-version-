import React from 'react'
import Hero from './heroSection/HeroSection';
import About from './aboutSection/AboutSection';
import Conferences from './conferencesSection/ConferencesSection';
import Agenda from './agendaSection/AgendaSection';
import './Content.css'
const Content = () => {
  return (
    <div className="home-content">
      <Hero />
      <About />
      <Conferences/>
      <Agenda/>
    </div>
  )
}

export default Content;