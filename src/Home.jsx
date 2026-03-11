import React from 'react'
import profileImg from "./assets/profile.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
   <section className="home">
  <div className="home-left">
    <h1 className="home-title">
      Hi, I'm <span>Rahul Singh</span>
    </h1>

    <h2 className="home-subtitle">
     Aspiring Software Developer | Java · SQL · React
    </h2>

    <p className="home-desc">
      I build clean, responsive web interfaces using React, HTML, CSS and JavaScript.
      I also have a solid foundation in Core Java and SQL, and I enjoy turning ideas
      into real projects.
    </p>

    <div className="home-buttons">
      <Link to="/contact" className="btn primary">Hire Me</Link>
      <Link to="/contact" className="btn secondary">Contact Me</Link>
    </div>
    
  </div>

  <div className="home-right">
    <div className="photo-wrapper">
      <img src={profileImg} alt="Rahul" />

  <div className="orbit">
    <span className="icon icon1">⚛️</span>
    <span className="icon icon2">💻</span>
    <span className="icon icon3">⚡</span>
    <span className="icon icon4">🐞</span>
  </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Home
