const express = require("express");
const config = require("config");
const axios = require("axios");
const {response} = require("express");

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
            return response.data;
        })
    //const data = await axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${token}`);
    res.send(data);
})