import React from 'react'
import LoggedIN_navBar from '../../../components/LoggedIN_navBar'
import QRgenerator from '../../qrcode/QRgenerator'

function RsearchQRCode() {
    const profileName="/researchprofile";
    const baseurl="https://staging.grvnotes.com"
    const scanurl={baseurl}+{profileName}
  return (
    <div className='research-qrcode-container'>
      <LoggedIN_navBar userName="XYZ Medical Research Pvt Ltd" urlName="/researchqrcode" />
      <QRgenerator
        qrcodeURL={scanurl}
        name="XYZ Medical Research Pvt Ltd"
      />
    </div>
  )
}

export default RsearchQRCode
