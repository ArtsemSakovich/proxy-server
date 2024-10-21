const axios = require("axios");

const startDate = process.env.START_DATE;
const endDate = process.env.END_DATE;
const token = process.env.TOKEN;

axios
    .get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${token}`)
    .then((response) => {
        console.log("Data received:", response.data);
    })
    .catch((error) => {
        if (error.response) {
            console.error(`HTTP error: ${error.response.status}`);
        } else if (error.request) {
            console.error("Request error: No response received");
        } else {
            console.error("Error:", error.message);
        }
    });

