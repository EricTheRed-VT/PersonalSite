'use strict'

import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import pkg from '../index.js';

const app = express()

app.use(require('volleyball'))

module.exports = app
  // Body parsing middleware
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(bodyParser.json())

  // Serve static files
  .use(express.static(resolve(__dirname, '../browser/public')))

  // Serve our api
  .use('/api', require('./api'))

  .get('/github', (req, res, next) => res.redirect('https://github.com/EricTheRed-VT/PersonalSite'))

  // Send index.html for anything else.
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, '../browser/public', 'index.html')))


const server = app.listen(
  process.env.PORT || 1337,
  () => {
    console.log(`--- Started HTTP Server---`)
    console.log(`Listening on ${JSON.stringify(server.address())}`)
  }
)
