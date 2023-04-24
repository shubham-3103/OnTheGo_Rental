import React, { useState, useEffect } from "react";
import '../App.css';
import img1 from '../images/vehicle.jpg'

export const Book = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [currentLocation, setCurrentLocation] = useState(null);
  const [dropTime, setDropTime] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setCurrentLocation(position.coords);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (currentLocation) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBM8gZdlzKwHrPFrLEHJDb3-HRWBh3Z-6U&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      window.initMap = () => {
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: currentLocation.latitude, lng: currentLocation.longitude },
          zoom: 15,
        });

        const marker = new window.google.maps.Marker({
          position: { lat: currentLocation.latitude, lng: currentLocation.longitude },
          map: map,
        });
      };
    }
  }, [currentLocation]);

  const handleDropTimeChange = (event) => {
    setDropTime(event.target.value);
  };
  const handlePickupTimeChange = (event) => {
    const selectedTime = new Date(event.target.value);
    if (selectedTime < currentDateTime) {
      alert("Pickup time should not be before current time.");
      event.preventDefault();
    } else {
      setPickupTime(selectedTime);
    }
  };

  return (
    <div>
      <div className='header'>
        <div className='content'>
          <div className='functionality'>
            <div className="bookride active"><a href="/book">BOOK RIDE</a></div>
            <div className="uploadvehicle"><a href="/upload">UPLOAD VEHICLE</a></div>
            <div className="availablevehicle"><a href="/available">AVAILABLE VEHICLE</a></div>
          </div>
          <div className="space"></div>
          <div className="bookinfo">
            <form>
              <label>
                From:<br/> {currentLocation && (<div id="map" style={{ height: "300px", width: "100%" }}></div>)}
              </label>
              <label>
                PickUp Time:
                <input type="time" onChange={handlePickupTimeChange} min={currentDateTime.toISOString().slice(0, -8)} />
                </label>
              <label>
                Drop Time:
                <input type="time" value={dropTime} onChange={handleDropTimeChange} />
              </label>
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