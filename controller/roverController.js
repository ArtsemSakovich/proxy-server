import {getRoverImage} from "../service/roverService.js";
import express from "express";

const router = express.Router();

router.post('/rover-image', async (req, res, next) => {
    try {
        const {apiKey} = req.body;
        const imageUrl = await getRoverImage(apiKey);
        res.send(imageUrl);
    } catch (error) {
        next(error);
    }
});

export default router;