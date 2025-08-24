// backend/routes/travelPlans.js
const express = require("express");
const router = express.Router();
const TravelPlan = require("../models/travelPlan");

// Route to get all travel plans
router.get("/", async (req, res) => {
  try {
    const travelPlans = await TravelPlan.find();
    res.json(travelPlans);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new travel plan
router.post("/", async (req, res) => {
  const travelPlan = new TravelPlan({
    title: req.body.title,
    description: req.body.description,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    locations: req.body.locations,
  });

  try {
    const newTravelPlan = await travelPlan.save();
    res.status(201).json(newTravelPlan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
