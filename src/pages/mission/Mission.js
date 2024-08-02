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
        <div className="mission-main-top">
          <h4 style={{textAlign:"center"}}>What is Our Mission</h4>
          <h6 style={{textAlign:"center"}}>Single Portal to access the Healthcare across India </h6>
          <h4 style={{textAlign:"center"}}>Problem - What & Why</h4>
          <h6>
            We are Building Healthcare App to Address 2 Major problem of India's
            Healthcare System
          </h6>
          <ul>
            <li>
              <b>
                1. Presonalized Heathcare or Precision Medicine by Building
                system of storing and sharing the Health information anytime and
                anywhere
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
          <h4 style={{textAlign:"center"}}>Solution is the Mission</h4>
          <h6>
            {" "}
            We are Building Healthcare App to Address 2 Major problem of India's
            Healthcare System
          </h6>
          <h6>
            1. Presonalized Heathcare or Precision Medicine by Building system
            of storing and sharing the Health information anytime and anywhere{" "}
          </h6>
          <h6>
            2. Reducing Cost Of Healthcare Delivery in India using Balockchain
            and AI{" "}
          </h6>
          <h3 style={{textAlign:"center"}}>  Future Directions</h3>
          <h6>
            {" "}
            1. Building Nation Wide Network of Healthcare
            Providers(Hospitals,Clinics,Old Age Home,NGOs, Testing
            centers/Medical Labs, Nursing Homes){" "}
          </h6>{" "}
          <h6>
            {" "}
            2. Building Nation Wide Network Network of Healthcare
            Professionals(Doctors, Nurses,Allied Heathcare Professionals){" "}
          </h6>
          <h6>
            {" "}
            3. Building Nation Wide Network of Medical Emergemcey Help Service
            Like Ambulence with PPP model with State/Central Government
          </h6>
          <h6>
            {" "}
            4. Building strong Marketplace for providing TeleHealth Services
            across the World: Leveraging medical/health tourism for Creating
            Employment and Strenthing the Heathcare Delivery with Consideration
            of Patient Experience{" "}
          </h6>
        </div>
        <div className="grv-profile">
          <div className="grv-profile-img">
            <hr></hr>
            <hr></hr>
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
            <a href="https://www.linkedin.com/in/gaurav0563/">
              <h4>Linkedin</h4>
            </a>
          </div>

          <a href="https://grvnotes.com/">
            <h4>Website</h4>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Mission;
