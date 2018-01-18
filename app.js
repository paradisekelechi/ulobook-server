/**
 * Author: Paradise Kelechi (Developer && IT Enthusiast)
 */

// Import the packages and modules
import express from "express";
import bodyParser from "body-parser";
import logger from "morgan";
import http from "http";
import dotenv from "dotenv";

import routes from "./routes.js";

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/*+json" }));

/**
 * Default route
 *
 * @param {Object} req
 * @param {Object} res
 */
let defaultRouteFunction = (req, res) => {
  res.status(200).send({
    message: "Welcome to school application!"
  });
};

/**
 * Define all the routes of the api
 */
routes(app);
app.get("*", defaultRouteFunction);

app.set(port);

const server = http.createServer(app);
server.timeout = 0;
server.on("error", err => {
  console.log(err);
});
server.listen(port, () => {
  console.log(`Server started and listening on ${port}`);
});
