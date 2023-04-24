const express = require('express');
const cors = require('cors');
const Vehicle = require('./uploadvehicle');
const mongoose = require('mongoose');
const connectDb = require('./connectDb')

const app = express();

app.use(express.json());
app.use(cors());
let PORT = 5000
connectDb();
app.get('/', (req, res) => {
    res.send("API is running...")
});

app.post('/vehicles', async (req, res) => {
  const vehicleName = req.body.vehicleName
  const vehicleNum = req.body.vehicleNum
  const contactNum = req.body.contactNum
  try {
    const newVehicle = new Vehicle({
      vehicleName,
      vehicleNum,
      contactNum,
    });

    await newVehicle.save();

    res.status(200).json({ success: true, message: "Vehicle information saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error saving vehicle information" });
  }
});

app.listen(PORT, console.log(`Server started at ${PORT}`));

