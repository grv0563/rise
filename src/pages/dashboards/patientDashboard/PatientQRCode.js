import React from 'react'
import LoggedIN_navBar from '../../../components/LoggedIN_navBar'
import QRgenerator from '../../qrcode/QRgenerator'


function PatientQRCode() {
    
  return (
    
    <div className='patient-qrcode-container'>
        <LoggedIN_navBar userName="Mr. Gaurav Shakya" urlName="/patientqrcode" />
        <QRgenerator qrcodeURL="https://staging.grvnotes.com/afterscan" name="MR. Gaurav Shakya (Patient)" />
       
      
    </div>
  )
}

export default PatientQRCode
