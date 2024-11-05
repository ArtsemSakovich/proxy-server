import express from "express";
import config from "config";

import meteorController from "./controller/meteorController.js";
import errorHandler from "./middleware/errorMiddleware.js";

const app = express();

const port = config.get("port");

app.use(meteorController);
app.use(errorHandler)

app.listen(port, (error) => {
    error ? console.log(error) : console.log(`Server is running on port: ${port}`);
})