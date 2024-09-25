import React from "react";
import "./Vision.css";
import NavigationBar from "../../../components/NavigationBar";
import Footer from "../../../components/Footer";
import VisionImg from "../../../assets/vision.png";
import AimImg from "../../../assets/aim.png";

function Vision() {
  return (
    <div className="vision-container">
      <div className="vision-header">
        <NavigationBar />
      </div>
      <div className=" phase-common-css  aim-image">
        <h3>
          <b>
            Ultimate Vision <img src={AimImg} alt="Compnay Vision" />
          </b>
        </h3>
        <p>
          {" "}
         1. Mission of this project is the smooth, ease, and secure sharing of health
          records of patients with priority focus on privacy, patient's
          discretion and consent protection against their health information
          processing and exchange.
        </p>
        <p>
       2. Improving Public Health Delivery, Healthcare Provider's Efficiency and Effectivness, Patient Experience, Accessibility and Medical Research.
        </p>
      </div>
      <div className="vision-main-area">
        <div className="roadmap-for-implementation ">
          <div className=" phase-common-css">
            <h3> Vision Flowchart</h3>
            <div className="vision-flowchart">
              <img src={VisionImg} alt="Compnay Vision" />
            </div>
          </div>
        </div>
      </div>
      <div className="vision-footer">
        <Footer />
      </div>
    </div>
  );
}

export default Vision;
