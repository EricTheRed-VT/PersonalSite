'use strict'

import path, { resolve } from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import volleyball from 'volleyball';
import apiRouter from './api';

const app = express()

  // Body parsing middleware
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(bodyParser.json())

  //logging middleware
  .use(volleyball)

  // Serve static files
  .use(express.static(resolve(__dirname, '../browser/public')))

  // Serve our api
  .use('/api', apiRouter)

  //serve github repository page
  .get('/github', (req, res, next) => res.redirect('https://github.com/EricTheRed-VT/PersonalSite'))

  // Send index.html for anything else.
  .get('/*', (req, res, next) => res.sendFile(resolve(__dirname, '../browser/public/index.html')))

  //error handling
  .use((err, req, res, next) => {
    console.error(err, typeof next);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });

const port = process.env.PORT || 1337;

const server = app.listen(
  port,
  () => {
    console.log(`--- Started HTTP Server---`);
    console.log(`Listening on port ${port}`);
  }
)

export default app;
