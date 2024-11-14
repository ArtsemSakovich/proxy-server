import {getMeteorsData} from "../../service/meteorService.js";

async function getMeteorDataController(req, res, next) {
    try {
        const { start_date, end_date, count, were_dangerous_meteors } = req.query;
        const meteors = await getMeteorsData(start_date, end_date, count, were_dangerous_meteors);

        res.render('meteors', {
            data: meteors.data,
            count: meteors.count,
            wereDangerousMeteors: meteors.wereDangerousMeteors
        });
    } catch (error) {
        next(error);
    }
}

export {getMeteorDataController}
