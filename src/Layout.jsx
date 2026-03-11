import React from 'react'
import {Link , Outlet} from "react-router-dom"
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from "react-icons/fa";



const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <span className="brand">
            <span className='brand-first'>R</span>ahul.
            </span>
        </div>

        <div className="nav-center">
          <div className="nav-pill">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>

        <div className="nav-right">
          <a href="https://github.com/rahulsingh67761" className="nav-icon"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/rahul-singh-429a40298/" className="nav-icon"><FaLinkedin /></a>
          <a href="https://discord.com/users/1127564837908652052" className="nav-icon"><FaDiscord /></a>
          <a href="mailto:rahulsingh67761@gmail.com" className="nav-icon"><FaEnvelope /></a>
        </div>
      </nav>

      <main style={{flex : 1}}>
        <Outlet />
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Rahul Singh. All rights reserved.</p>

       <div className="social-icons">
       <a href="https://github.com/rahulsingh67761" target="_blank"><FaGithub /></a>
       <a href="https://www.linkedin.com/in/rahul-singh-429a40298/" target="_blank"><FaLinkedin /></a>
       <a href="mailto:rahulsingh67761@gmail.com"><FaEnvelope /></a>
      </div>
     </footer>
    </>
  )
}

export default Layout
