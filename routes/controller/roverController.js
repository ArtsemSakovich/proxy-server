import {getRoverImage} from "../../service/roverService.js";

async function getRoverImageController(req, res, next) {
    try {
        const {apiKey} = req.body;
        const imageUrl = await getRoverImage(apiKey);
        res.render('roverImage', {
            imageUrl: imageUrl
        });
    } catch (error) {
        next(error);
    }
}

export {getRoverImageController};