/**
 * Author: Paradise Kelechi (Developer && IT Enthusiast)
 */

/* eslint-disable no-console */

/**
 * Import the packages and modules
 */
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import http from 'http';
import dotenv from 'dotenv';

import Routes from './utils/Routes';
import BaseLogger from './utils/Logger';

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json({
  type: 'application/*+json',
}));

/**
 * Default route
 *
 * @param {Object} req
 * @param {Object} res
 */
const defaultRouteFunction = (req, res) => {
  res.status(200).send({
    message: 'Welcome to school application!',
  });
};

/**
 * Define all the routes of the api
 */
Routes(app);
app.get('*', defaultRouteFunction);

app.set(port);

const server = http.createServer(app);
server.timeout = 0;
server.on('error', (err) => {
  console.log(err);
});
server.listen(port, () => {
  BaseLogger('info', `Server started and listening on ${port}`);
  console.log(`Server started and listening on ${port}`);
});
