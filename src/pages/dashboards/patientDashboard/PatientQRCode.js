import React from "react";
import LoggedIN_navBar from "../../../components/LoggedIN_navBar";
import QRgenerator from "../../qrcode/QRgenerator";

function PatientQRCode() {
  const profileName = "/afterscan";
  const baseurl = "https://staging.grvnotes.com";
  const scanurl = { baseurl } + { profileName };

  return (
    <div className="patient-qrcode-container">
      <LoggedIN_navBar userName="Mr. Gaurav Shakya" urlName="/patientqrcode" />
      <QRgenerator qrcodeURL={scanurl} name="MR. Gaurav Shakya (Patient)" />
    </div>
  );
}

export default PatientQRCode;
