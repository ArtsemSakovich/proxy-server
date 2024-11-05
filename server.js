const express = require("express");
const config = require("config");
const axios = require("axios");
const app = express();

const port = config.get("port");
const startDate = config.get("startDate");
const endDate = config.get("endDate");
const token = config.get("token");

app.listen(port, (error) => {
    error ? console.log(error) : console.log(`Server is running on port: ${port}`);
})

app.get("/meteors", async (req, res) => {
    const data =
        await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${token}`)
        .then((response) => {
            return response.data.near_earth_objects;
        })

    const meteors = [];

    for (const date in data) {
        data[date].forEach((meteor) => {
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

    res.send(meteors);
})