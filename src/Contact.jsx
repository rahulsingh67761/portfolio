import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
emailjs.init("KkSAt9WmRl_SsBFoQ");

const Contact = () => {
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_jbzlo22",
      "template_tqcijoc",
      e.target,
      "KkSAt9WmRl_SsBFoQ"
    ).then(
      
      (result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message");
          }
          );
        };
  return (
   <section id = "contact" className="contact">
      <h2 className='contact-title'>Get In Touch</h2>

      <div className="contact-container">

        <div className="contact-left">
          <p className="contact-text">
            Lets get connect! I’m always open to discussing new projects, ideas, or opportunities.
          </p>

          <div className="contact-info">
            <p>📧 rahulsingh67761@gmail.com</p>
            <p>📞 +91 8073410379</p>
            <p>📍 Bangalore, India</p>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/rahulsingh67761"target="_blank"rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/rahul-singh-429a40298/"target="_blank"rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://wa.me/918073410379"target="_blank"rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>

        </div>

        <div className="contact-right">
          <form onSubmit={sendEmail} className="contact-card">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  )
}

export default Contact
