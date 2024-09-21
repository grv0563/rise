import React from "react";
import LoggedIN_navBar from "../../../components/LoggedIN_navBar";
import QRgenerator from "../../qrcode/QRgenerator";

function TestCenterQRCode() {
    const profileName="/testcenterprofile"
    const baseurl="https://staging.grvnotes.com"
    const scanurl={baseurl}+{profileName}
  return (
    <div className="test-qrcode-container">
      <LoggedIN_navBar userName="XYZ Testing Center" urlName="/testqrcode" />
      <QRgenerator
        qrcodeURL={scanurl}
        name="XYZ Testing Center"
      />
    </div>
  );
}

export default TestCenterQRCode;
