import React from "react";
import Navbar from "../../../components/NavigationBar";
import "./Mission.css";
import Footer from "../../../components/Footer";
function Mission() {
  return (
    <div className="mission-container">
      <div className="mission-header">
        <Navbar />
      </div>
      <div className="mission-main">
        <div className="mission-main-top">
          <h4 style={{ textAlign: "center" }}>What is Our Mission</h4>
          <p style={{textAlign:"left", fontWeight:"bolder"}}>
            {" "}
            1. Mission of this project is the smooth, ease, and secure sharing
            of health records of patients with priority focus on privacy,
            patient's discretion and consent protection against their health
            information processing and exchange.
          </p>
          <p style={{textAlign:"left", fontWeight:"bolder"}}>
            2. Improving Public Health Delivery, Healthcare Provider's
            Efficiency and Effectivness, Patient Experience, Accessibility and
            Medical Research.
          </p>
          <h4 style={{ textAlign: "center" }}>Problem - What & Why</h4>
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
                Blockchain and AI
              </b>
            </li>
          </ul>
          <h4 style={{ textAlign: "center" }}>Solution is the Mission</h4>
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
          <h3 style={{ textAlign: "center" }}> Future Directions</h3>
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
      </div>

      <Footer />
    </div>
  );
}

export default Mission;
