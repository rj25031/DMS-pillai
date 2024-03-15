import React from 'react';
import '../css/About.css';
import img from '../images/bhik.jpeg';

const About = () => {
  return (
    <React.Fragment>
         <section id="profile">
      <div class="section__pic-container">
        <img src={img}
        
        alt="text"
        />
      </div>
      <div class="section__text">
        <h1 class="title"><span>Thaagam</span> Foundation for Help Children.</h1>
        <p class="section__text__p2">We, Thaagam Foundation, a non-government organization, are working towards elevating the livelihoods of all living beings. Our thirst ('thaagam') is to serve humanity. We believe humanity consists of people, animals, and the environment. We uphold our commitment to all living things 
        by implementing innovative and effective programs for the underprivileged, animal welfare, and the environment.</p>
      
        
      </div>
    </section>
    </React.Fragment>
  )
}

export default About