import React from "react";
import '../App.css';
import img1 from '../images/vehicle.jpg'

export const Book = () => {
return (
	<div>
		<div className='header'>
        <div className='content'>
          <div className='functionality'>
            <div className="bookride"><a href="/book">BOOK RIDE</a></div>
            <div className="uploadvehicle"><a href="/upload">UPLOAD VEHICLE</a></div>
            <div className="availablevehicle"><a href="/available">AVAILABLE VEHICLE</a></div>
          </div>
        <div className="bookinfo">
			<form>
				<label>From:<input type="text" /></label>
				<label>Pickup Time:<input type="text" /></label>
				<label>Drop Time:<input type="text" /></label>
			</form>
		</div>
        </div>
        <div className='image_'>
            <img src={img1} />
        </div>
      </div>
		
	</div>
);
};
