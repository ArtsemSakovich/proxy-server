import config from "config";
import {formatMeteorData} from "../util/utils.js";
import {fetchMeteorsData} from "../repository/meteorRepository.js";

async function getMeteorsData(startDate, endDate, count, wereDangerousMeteors) {
    const nasaApiUrl = config.get("nasaApiUrl");
    const token = config.get("token");

    const meteorsData = await fetchMeteorsData(nasaApiUrl, startDate, endDate, token);
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
}

export { getMeteorsData };