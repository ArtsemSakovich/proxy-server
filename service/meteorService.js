import config from "config";
import {formatMeteorData} from "../util/utils.js";
import {getMeteorsData} from "../repository/meteorRepository.js";

export const getSimplifiedMeteorsData = async (startDate, endDate, count, wereDangerousMeteors) => {
    const token = config.get("token");

    const meteorsData = await getMeteorsData(startDate, endDate, token);
    const formattedMeteorData = Object.values(meteorsData).flatMap(formatMeteorData);

    if (count) {
        formattedMeteorData.count = Object.values(meteorsData)
            .flat()
            .filter(meteor => meteor.is_sentry_object).length;
    }

    if (wereDangerousMeteors) {
        formattedMeteorData.wereDangerousMeteors = Object.values(meteorsData)
            .flat()
            .some(meteor => meteor.is_potentially_hazardous_asteroid);
    }

    return {
        data: formattedMeteorData,
        count: formattedMeteorData.count,
        wereDangerousMeteors: formattedMeteorData.wereDangerousMeteors
    };
};