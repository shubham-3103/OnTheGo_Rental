import React from 'react';
import '../App.css'
import img1 from '../images/vehicle.jpg'

const Rate = () => {
  return (
    <div>
      <div className='header'>
        <div className='content'>
          <div className="space"></div>
          <div className="bookinfo"></div>
		  <table>
        <thead>
          <tr>
            <th>Vehicle Type</th>
            <th>Rates</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Scooter</td>
            <td>Rs 150 per hour</td>
          </tr>
          <tr>
            <td>Motorcycle</td>
            <td>Rs 200 per hour</td>
          </tr>
          <tr>
            <td>Electric Bike</td>
            <td>Rs 250 per hour</td>
          </tr>
          <tr>
            <td>Four Wheeler</td>
            <td>Rs 500 per hour</td>
          </tr>
        </tbody>
      </table>
		  

        </div>
        <div className='image_'>
          <img src={img1} />
        </div>
      </div>
    </div>
  );
};

export default Rate;
