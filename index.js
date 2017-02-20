'use strict'

const {resolve} = require('path')
const chalk = require('chalk')
const pkg = require('./package.json')
const debug = require('debug')(`${pkg.name}:boot`)

const env = Object.create(process.env);

module.exports = {
  get name() {
    return pkg.name
  },
  get isProduction() {
    return process.env.NODE_ENV === 'production'
  },
  get baseUrl() {
    return env.BASE_URL || `http://localhost:${env.PORT}`
  },
  get port() {
    return env.PORT || 1337
  },
  package: pkg,
  env,
}
