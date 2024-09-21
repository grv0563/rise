import React from "react";
import LoggedIN_navBar from "../../../components/LoggedIN_navBar";
import QRgenerator from "../../qrcode/QRgenerator";

function InsurerQRCode() {
    const profileName="/insuranceprofile"
    const baseurl="https://staging.grvnotes.com"
    const scanurl={baseurl}+{profileName}
  return (
    <div className="insurer-qrcode-container">
      <LoggedIN_navBar userName="Insurance Company pvt Ltd" urlName="/insurerqrcode" />
      <QRgenerator
        qrcodeURL={scanurl}
        name="Insurnace Company Pvt Ltd"
      />
    </div>
  );
}

export default InsurerQRCode;
