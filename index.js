const axios = require("axios");

axios
    .get("https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-10-14&end_date=2024-10-18&api_key=II1sjzN43X13j2PXI3Cx4sQBfHQT5cc5B8qKGr2V")
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

