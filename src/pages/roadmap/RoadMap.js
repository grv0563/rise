import React from 'react'
import NavigationBar from '../../components/NavigationBar'
import Footer from '../../components/Footer'
import "./RoadMap.css"

function RoadMap() {
  return (
    <div className='roadmap-container'>
      <div className='roadmap-header'>
        <NavigationBar/>
      </div>
      <div className='roadmap-main-area'>
        <h1>RoadMap</h1>
      </div>
      <div className='roadmap-footer'>
        <Footer/>
      </div>
    </div>
  )
}

export default RoadMap
