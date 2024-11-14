import axios from "axios";

async function fetchMeteorsData(nasaApiUrl, startDate, endDate, token) {
    const url = `${nasaApiUrl}/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${token}`;
    const response = await axios.get(url);
    return response.data.near_earth_objects;
}

export { fetchMeteorsData };
