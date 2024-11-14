import express from "express";
import config from "config";
import errorHandler from "./middleware/errorMiddleware.js";
import nunjucks from "nunjucks";
import router from "./routes/router.js";

const app = express();

const port = config.get("port");

app.use(express.json());
app.use('/', router);
app.use(errorHandler)

app.listen(port, (error) => {
    error ? console.log(error) : console.log(`Server is running on port: ${port}`);
})

nunjucks.configure('./view', {
    autoescape: true,
    express: app
});

app.set('view engine', 'njk');
