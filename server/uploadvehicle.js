const mongoose = require('mongoose');

// Create a schema for the vehicle data
const vehicleSchema = new mongoose.Schema({
  vehicleName: {
    type: String,
    required: true,
  },
  vehicleNum: {
    type: String,
    required: true,
  },
  contactNum: {
    type: Number,
    required: true,
  },
});

// Create a model for the vehicle data
const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
