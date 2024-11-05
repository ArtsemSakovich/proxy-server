import axios from "axios";

export const getMeteorsData = async (startDate, endDate, token) => {
    return await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${token}`)
        .then((response) => {
            return response.data.near_earth_objects;
        })
};