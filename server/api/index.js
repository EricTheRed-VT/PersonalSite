'use strict'

import db from '../db';
import exampleSubRouter from './exampleSubRouter'
import { Router } from 'express';

const api = Router()

  //check if the server is running
  .get('/heartbeat', (req, res) => res.send({
    ok: true,
  }))

  //subrouters
  .use('/example', exampleSubRouter)

  // No routes matched? 404.
  .use((req, res) => res.status(404).send())
