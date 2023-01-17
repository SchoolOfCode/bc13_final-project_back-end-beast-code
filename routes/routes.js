import express from "express";
import getDataByCoords from "../models/model.js";

const router = express.Router();


//get by coordinates
router.get("/:coords", async (req, res) => {
  try {
    console.log("made it to routes");
    const inputCoords = req.params.coords
    //coords comes in as a string so we split it at the comma to get an array of 2 strings
    const twoStrings = inputCoords.split(',')
    //convert each string coordinate in the array into a number coordinate
    const coordsArray = [+twoStrings[0], +twoStrings[1]]
    const filterQuery = req.body.query

    console.log(typeof(filterQuery))
    //pass array of 2 numbers into model
    const bars = await getDataByCoords(coordsArray, filterQuery);
    res.send({ success: true, payload: bars });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;