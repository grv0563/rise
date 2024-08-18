import React from 'react'
import "./Aboutus.css"
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'

function Aboutus() {
  return (
    <div className='aboutus-container'>
        <div className='aboutus-header'>
        <NavigationBar/>
        </div>
        <div className='aboutus-main-area'>
        <h1>aboutus</h1>
        </div>
        <div className='aboutus-footer'>
        <Footer/>
        </div>
      
    </div>
  )
}

export default Aboutus
