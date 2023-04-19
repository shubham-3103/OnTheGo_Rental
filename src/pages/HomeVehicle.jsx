import React from 'react'
import {SidebarData} from '../components/SidebarData'
import '../App.css'

import img1 from '../images/vehicle.jpg'
function HomeVehicle() {
  return (
    <div>
      <div className='header'>
        <div className='content'>
          <div className='functionality'>
            <div className="bookride"><a href="/book">BOOK RIDE</a></div>
            <div className="uploadvehicle"><a href="/upload">UPLOAD VEHICLE</a></div>
            <div className="availablevehicle"><a href="/available">AVAILABLE VEHICLE</a></div>
          </div>
          
        </div>
        <div className='image_'>
            <img src={img1} />
        </div>
      </div>
    </div>
  )
}

export default HomeVehicle