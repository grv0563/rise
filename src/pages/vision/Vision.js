import React from 'react'
import "./Vision.css"
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'

function Vision() {
  return (
    <div className="vision-container">
        <div className='vision-header'>
            <NavigationBar/>
        </div>
        <div className='vision-main-area'>
        <h1>Vision Statement</h1>
        </div>
        <div className='vision-footer'>
        <Footer/>
        </div>
      
    </div>
  )
}

export default Vision
