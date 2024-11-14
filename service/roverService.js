import config from "config";
import {fetchRoverImage} from "../repository/roverRepository.js";

async function getRoverImage(apiKey) {
    const nasaApiUrl = config.get("nasaApiUrl");
    return await fetchRoverImage(nasaApiUrl, apiKey);
}

export { getRoverImage };