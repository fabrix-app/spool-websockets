/* eslint no-console: [0] */
'use strict'

const joi = require('joi')
import { websocketsConfig } from './schemas'

export const Validator = {

  // Validate Websockets Config
  validateWebsocketsConfig (config) {
    return new Promise((resolve, reject) => {
      joi.validate(config, websocketsConfig, (err, value) => {
        if (err) {
          return reject(new TypeError('config.websockets: ' + err))
        }
        return resolve(value)
      })
    })
  }
}
