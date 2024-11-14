import express from "express";
import {meteorsSchema, roverImageSchema, validateIncomingGetRequest, validateIncomingPostRequest} from "../middleware/validationMiddleware.js";
import {getRoverImageController} from "./controller/roverController.js";
import {getMeteorDataController} from "./controller/meteorController.js";

const router = express.Router();

router.post('/rover-image', validateIncomingPostRequest(roverImageSchema), getRoverImageController);
router.get('/meteors', validateIncomingGetRequest(meteorsSchema), getMeteorDataController);

export default router;