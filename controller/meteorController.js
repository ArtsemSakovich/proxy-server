import {getSimplifiedMeteorsData} from "../service/meteorService.js";
import express from "express";

const router = express.Router();

router.get('/meteors', async (req, res, next) => {
    try {
        const meteors = await getSimplifiedMeteorsData();
        res.json(meteors);
    } catch (error) {
        next(error);
    }
});

export default router;