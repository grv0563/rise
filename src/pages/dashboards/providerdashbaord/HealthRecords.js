import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import new_message_icon from "../../../assets/new-message-icon.png";
import Summarize from "../../qrcode/Summarize";
import Prescribe from "../../qrcode/Prescribe";
import Explore from "./Explore";
import "./HealthRecords.css"
import "./Dashboard.css"


let drugId = 0;
let patientHealthRecords = {
  medical_tests: ["test1", "test2"],
  prescriptions: ["prescription 1", "prescription 2"],
  x_rays: ["x_rays1", "x_rays2"],
  mri_scans: ["mris1", "mris2"],
};

function HealthRecords() {
    const [drug, setdrug] = useState();
    const [prescribed_drug, setprescribed_drug] = useState([]);
    const [file, serfile] = useState("");

    const handle_drug_adding_in_prescription = () => {
        // alert("Drug added in Precription");
        setprescribed_drug([...prescribed_drug, { id: drugId++, name: drug }]);
        setdrug("");
      };
    
      const handleFileUpload = (e) => {
        e.preventDefault();
        serfile(e.target.value);
      };
    
  return (
    
    <div className="patient-container">
        <div className="patient-list">
            <Accordion>
              <Accordion.Item eventKey="0">
                <p>Patient id#2 - Most Recent</p>
                <Accordion.Header>
                  Patient id#2 - Most Recent
                  <img
                    style={{
                      marginLeft: "10px",
                      marginTop: "0px",
                      height: "20px",
                      width: "20px",
                    }}
                    src={new_message_icon}
                  />
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <h3>Medical History - patient id#1 </h3>
                    <h4>Medical_tests</h4>
                    <li>{patientHealthRecords.medical_tests[0]}</li>
                    <li>{patientHealthRecords.medical_tests[1]}</li>
                    <h4>X_ray_Reports</h4>
                    <li>{patientHealthRecords.x_rays[0]}</li>
                    <li>{patientHealthRecords.x_rays[1]}</li>
                    <h4>MRI_scans</h4>
                    <li>{patientHealthRecords.mri_scans[0]}</li>
                    <li>{patientHealthRecords.mri_scans[1]}</li>
                    <h4>Prescriptions</h4>
                    <li>{patientHealthRecords.prescriptions[0]}</li>
                    <li>{patientHealthRecords.prescriptions[1]}</li>
                    <div className="dashboard-button">
                      <Summarize />
                      <Prescribe />
                    </div>
                    <ul>
                      {prescribed_drug.map((drug) => (
                        <li key={drug.id}>{drug.name}</li>
                      ))}
                    </ul>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
              <p>Patient id#1 </p>
                <Accordion.Header >Patient id#1</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <h3>Medical History - patient id#2 </h3>
                    <h4>Medical_tests</h4>
                    <li>{patientHealthRecords.medical_tests[0]}</li>
                    <li>{patientHealthRecords.medical_tests[1]}</li>
                    <h4>X_ray_Reports</h4>
                    <li>{patientHealthRecords.x_rays[0]}</li>
                    <li>{patientHealthRecords.x_rays[1]}</li>
                    <h4>MRI_scans</h4>
                    <li>{patientHealthRecords.mri_scans[0]}</li>
                    <li>{patientHealthRecords.mri_scans[1]}</li>
                    <h4>Prescriptions</h4>
                    <li>{patientHealthRecords.prescriptions[0]}</li>
                    <li>{patientHealthRecords.prescriptions[1]}</li>
                    <div className="dashboard-button">
                      <Summarize />
                      <Prescribe />
                    </div>
                    <ul>
                      {prescribed_drug.map((drug) => (
                        <li key={drug.id}>{drug.name}</li>
                      ))}
                    </ul>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="afterscan-prescribe-drug">
            <div className="input-drug">
              <input
                placeholder="Quick latest journal search"
                value={drug}
                onChange={(e) => {
                  setdrug(e.target.value);
                }}
              />
              <input
                value={file}
                onChange={handleFileUpload}
                className="upload-file"
                content="upload"
                type="file"
              />
            </div>
            <Explore searchQuery={drug} />
          </div>
    </div>
  )
}

export default HealthRecords;