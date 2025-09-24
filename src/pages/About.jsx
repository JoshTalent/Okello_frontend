import React from 'react'
import Navbar from '../components/Navbar' 
import Abouts from '../components/about/About'
import Footer from '../components/Footer'
import Testimonial from '../components/home/Testimonial'
import Excome from '../components/about/Excome'
const About = () => {
  return (
    <>
    <Navbar />
    <Abouts />
    <Excome />
    <Testimonial />
    <Footer /> 
    </>
  )
}

export default About