import express from "express";
import getDataByCoords from "../models/model.js";

const router = express.Router();

//get by coordinates
router.get('/', async (req, res) => {
    try{
        console.log("made it to routes")
        const bars = await getDataByCoords(req.body)
        console.log(bars)
        res.send(bars);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

export default router;