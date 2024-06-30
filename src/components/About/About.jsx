import React from 'react'
import './About.css'
import play_icon from '../../assets/images/play.png'
import about_img from '../../assets/images/about.jpg'

const About = () => {
  return (
    <div className="container">
    <div className='about'>
      <div className="about-left">
        <img className="about-img" src={about_img} alt="" />
        <img className="play-icon" src={play_icon} alt="" />
      </div>
      <div className="about-right">
        <h3>ABOUT COMPANY</h3>
        <h2>Elix Solution Sdn. Bhd.</h2>
        <p>Elix Solution Sdn. Bhd. is a company based in Malaysia that specializes in providing advanced technology solutions and services. The company focuses on areas such as data integration, business intelligence, and digital transformation. By leveraging cutting-edge technology, Elix Solution aims to help businesses optimize their operations, improve decision-making, and enhance overall efficiency.</p>
      </div>
    </div>
    </div>
  )
}

export default About
