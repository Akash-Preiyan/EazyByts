import React from 'react';
import "./about.css"

export default function About() {
  return (
    <>
      <div className="about-container">
        <section className="about-div-1">
          <img src="/dev_pic.png" alt="dev-pic" />
        </section>
        <section className="about-div-2">
          <h1>LET ME <span className='highlight'>INTRODUCE</span> MYSELF</h1>
          <p>Hi, I am <span className="highlight">AKASH PREIYAN!</span></p>
          <p>I am a 2nd Year Computer Science and Engineering Student at Velammal Engineering College. </p>
          <p>I am a <span className='highlight'>Full Stack Developer</span> and <span className="highlight">Aspiring AIML Engineer</span>.I thrive on tackling challenges with a logical and analytical mindset, using my technical skills to develop efficient and practical solutions.
          By creating impactful projects and mastering advanced technologies.  I’m deeply motivated to bring value to organizations through meaningful contributions and continuous learning. I enjoy creating solutions that merge creativity and logic.
          </p>
          <p> I approach problem-solving with a clear, structured mindset, breaking down complex challenges into manageable steps while ensuring efficiency and precision.</p>
        </section>
      </div>
    </>
  )
}