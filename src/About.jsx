import profileImg from "./assets/profile.jpg"

export default function About() {
  return (
    <section className="about">
      <h2 className="about-title">About Me</h2>
<div className="about-container">

        {/* LEFT – PHOTO */}
        <div className="about-left">
          <img src={profileImg} alt="Rahul About" />
        </div>

        {/* RIGHT – CONTENT */}
      <div className="about-right">
          <p>
            Hi, I'm Rahul, a passionate Frontend & Java Developer.
            I have hands-on experience in building responsive web interfaces using
            HTML, CSS, JavaScript, and React.
            I also have a solid understanding of Core Java and SQL,
            which helps me write structured and logical code.
          </p>

        <p>
        I completed my graduation and later joined JSpiders, where I spent
        around a year strengthening my technical foundation. During this
        period, I learned frontend technologies like HTML, CSS, JavaScript,
        and React, along with Core Java and SQL. This journey helped me
        understand both UI development and logical backend concepts.
       </p>

      <p>
        I am currently looking for opportunities where I can apply my skills,
        grow as a developer, and contribute to real-world projects. I am open
        to internships, full-time roles, or any opportunity that allows me to
        learn and improve.
      </p>

          {/* CARDS SECTION */}
       <div className="about-cards">

         {/* SKILLS CARD */}
      <div className="card">
         <h3>Skills</h3>

        <div className="skill-tags">
         <span>HTML</span>
         <span>CSS</span>
         <span>JavaScript</span>
         <span>React</span>
         <span>Core Java</span>
         <span>SQL (MySQL)</span>
         <span>Git</span>
         <span>GitHub</span>
         </div>
      </div>

       {/* EDUCATION CARD */}
      <div className="card">
       <h3>Education</h3>

       <p className="edu-placeholder">
        Bachelor of Computer Applications (BCA), IZee Business School, Bangalore
        (2021 – 2024).  
           <br /><br />
       Completed a Full Stack Development (Java) training program at JSpiders,
       Bangalore, where I gained hands-on experience in HTML, CSS, JavaScript,
      React, Core Java, and SQL.
      </p>
     </div>

</div>

          <a href="/Rahul Resume.pdf" className="resume-btn" download>
            Download Resume
          </a>
        </div>

  </div>
    </section>
  );
}