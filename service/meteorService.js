import config from "config";
import { getMeteorsData } from "../repository/meteorRepository.js";

export const getSimplifiedMeteorsData = async (startDate, endDate, count, wereDangerousMeteors) => {
    const token = config.get("token");

    const meteorsData = await getMeteorsData(startDate, endDate, token);

    let meteors = [];

    for (const date in meteorsData) {
        meteorsData[date].forEach((meteor) => {
            meteors.push({
                id: meteor.id,
                name: meteor.name,
                diameter_meters: meteor.estimated_diameter.meters.estimated_diameter_max,
                is_potentially_hazardous_asteroid: meteor.is_potentially_hazardous_asteroid,
                close_approach_date_full: meteor.close_approach_data[0].close_approach_date_full,
                relative_velocity_km_per_sec: meteor.close_approach_data[0].relative_velocity.kilometers_per_second,
            });
        });
    }
console.log(count);
    if (count) {
        const count = Object.values(meteorsData)
            .flat()
            .filter(meteor => meteor.is_sentry_object).length;
        meteors.push({
            count: count
        });
    }
    console.log(wereDangerousMeteors);

    if (wereDangerousMeteors) {
        const wereDangerousMeteors = Object.values(meteorsData)
            .flat()
            .some(meteor => meteor.is_potentially_hazardous_asteroid);
        meteors.push({
            wereDangerousMeteors: wereDangerousMeteors
        });
    }

    return meteors;
};