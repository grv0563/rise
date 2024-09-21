import React from 'react'
import QRgenerator from '../qrcode/QRgenerator'
import LoggedIN_navBar from '../../components/LoggedIN_navBar'

function DocterQRCode() {
  return (
    <div className='provider-qrcode-container'>
        <LoggedIN_navBar userName="Dr. Gaurav Shakya" urlName="/docterqrcode" />
        <QRgenerator qrcodeURL="https://staging.grvnotes.com/docterprofile" name="Dr. Gaurav Shakya(provider)" />
      
    </div>
  )
}

export default DocterQRCode
