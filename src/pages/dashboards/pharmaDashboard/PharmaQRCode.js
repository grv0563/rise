import React from 'react'
import LoggedIN_navBar from '../../../components/LoggedIN_navBar'
import QRgenerator from '../../qrcode/QRgenerator'

function PharmaQRCode() {
    const profileName = "/pharmaprofile";
  const baseurl = "https://staging.grvnotes.com";
  const scanurl = { baseurl } + { profileName };
  return (
    <div className='pharma-qrcode-container'>
      <LoggedIN_navBar userName="Z Pharma Pvt Ltd" urlName="/pharmaqrcode" />
      <QRgenerator
        qrcodeURL={scanurl}
        name="Z Pharma Pvt Ltd"
      />
    </div>
  )
}

export default PharmaQRCode
