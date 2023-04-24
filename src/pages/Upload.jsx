import React,{useState} from 'react'
import '../App.css';
import img1 from '../images/vehicle.jpg'

function Upload() {
  const [vehicleName, setVehicleName] = useState("");
  const [vehicleNum, setVehicleNum] = useState("");
  const [contactNum, setContactNum] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const vehicleName = document.getElementById('vehiclename').value;
    const vehicleNum = document.getElementById('vehiclenum').value;
    const contactNum = document.getElementById('contactnumber').value;

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          vehicleName,
          vehicleNum,
          contactNum
        })
      });
      
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        const data = await response.json();
        console.log('Data:', data);
      
        if (data.success) {
          console.log('Vehicle information saved successfully');
        } else {
          console.log('Error saving vehicle information');
        }
      } else {
        console.error('Response is not a JSON object');
      }
    } catch (error) {
        console.error('Error:', error);
    }
}


  return (
    <div>
      <div className='header'>
        <div className='content'>
          <div className='functionality'>
            <div className="bookride"><a href="/book">BOOK RIDE</a></div>
            <div className="uploadvehicle"><a href="/upload">UPLOAD VEHICLE</a></div>
            <div className="availablevehicle"><a href="/available">AVAILABLE VEHICLE</a></div>
          </div>
          <div className="space"></div>
          <div className="bookinfo">
          <form onSubmit={handleSubmit}>
              <label>
                Vehicle Name:
                <input type="text" id='vehiclename' value={vehicleName} onChange={(e) => setVehicleName(e.target.value)} />
              </label>
              <label>
                Vehicle Number
                <input type="text" id='vehiclenum' value={vehicleNum} onChange={(e) => setVehicleNum(e.target.value)} />
              </label>
              <label>
                Contact Number
                <input type="number" name="number" id="contactnumber" value={contactNum} onChange={(e) => setContactNum(e.target.value)} />
              </label>
              <button className='uploadbutton' type="submit">UPLOAD</button>
            </form>
          </div>
        </div>
        <div className='image_'>
          <img src={img1} />
        </div>
      </div>
    </div>
  )
}

export default Upload