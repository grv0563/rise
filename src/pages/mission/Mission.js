import React from "react";
import Navbar from "../../components/NavigationBar";
import "./Mission.css";
import Footer from "../../components/Footer";
import grvPhoto from "../../assets/gaurav.jpeg";
function Mission() {
  return (
    <div className="mission-container">
      <div className="mission-header">
        <Navbar />
      </div>
      <div className="mission-main">
        <h1>What is Our Mission</h1>
        <h3>Single Portal to access the Healthcare across India </h3>
        <h3>Problem - What & Why</h3>
        <h4>
          We are Building Healthcare App to Address 2 Major problem of India's
          Healthcare System.
        </h4>
        <ul>
          <li>
            <b>
              1. Presonalized Heathcare or Precision Medicine by Building system
              of storing and sharing the Health information anytime and anywhere
            </b>
          </li>
          <li>
            <b>
              2. Reducing Cost Of Healthcare Delivery in India by solving the
              pain point of Healthcare insurance claim cycle delivery using
              Balockchain and AI
            </b>
          </li>
        </ul>
        <h3></h3>
        <h2>Solution is the Mission</h2>
        <p>Comming soon</p>

        <div className="grv-profile">
          <div className="grv-profile-img">
            <h2>Who we Are ?</h2>
            <img src={grvPhoto} alt="Gaurav Shakya's Profile Photo" />
          </div>
          <div className="grv-profile-description">
            <p>
              My name is Gaurav Gautam Shakya. I am an Amateur Artificial
              intelligence Researcher, Azure Certified AI Engineer and AWS Cloud
              Practitioner. My expertise particularly in Public Cloud Services,
              AI and their accessibility opportunities, risks and challenges.
              Combination of AI and Blockchain is disrupive. I love to talk
              about disruption in Business and Technology. I believe that
              Working on Artificial General intelligence is the most rewarding
              career for me. I am always interested in Physics but went to
              engineering College. where I was exposed to computer Hardware and
              software stuff. I fall in love with the Mind-bending Complexity of
              Computer systems. Then I was intrigued by the question "Why are
              engineers striving for building such complex systems and Why
              businesses and spending such big money on these systems". Now I
              can feel the impact of these complex engineered systems which
              empowers the individuals, SMBs, Big Business and even some of the
              world's largest economies. I am very impressed by the people who
              ask strategically broad questions which give me food for thought.
              Asking or listening to broad and unconventional questions seems
              stupid or unnecessary for the first time because of limited
              resources but they are crucial for setting the vision and
              existential story of a company. I am looking for someone who is
              constantly striving to grasp the big picture of company, industry
              or Economic opportunities over the course of time.
            </p>
          </div>

          <div className="grv-profile-details"></div>
          <div>
            <a href="https://www.linkedin.com/in/gaurav0563/"><h4>Linkedin</h4></a>
          </div>

          <a href="https://grvnotes.com/"><h4>Website</h4></a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Mission;
