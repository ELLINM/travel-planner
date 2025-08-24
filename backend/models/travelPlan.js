// backend/models/travelPlan.js
const mongoose = require("mongoose");

// Define a schema for travel locations
const locationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  placeId: { type: String, required: true },
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
  order: { type: Number, required: true },
});

// Define a schema for a travel plan
const travelPlanSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  startDate: Date,
  endDate: Date,
  locations: [locationSchema],
  createdAt: { type: Date, default: Date.now },
});

// Create and export the model
module.exports = mongoose.model("TravelPlan", travelPlanSchema);
