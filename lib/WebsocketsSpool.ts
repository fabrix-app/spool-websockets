import { ExtensionSpool } from '@fabrix/fabrix/dist/common/spools/extension'
import { Websockets } from './websockets'
import { Validator } from './validator'

import * as config from './config/index'
import * as pkg from '../package.json'
import * as api  from './api/index'

export class WebsocketsSpool extends ExtensionSpool {
  public websockets: {[key: string]: any} = {}
  constructor(app) {
    super(app, {
      config: config,
      pkg: pkg,
      api: api
    })

    this.extensions = {
      websockets: {
        get: () => {
          return this.websockets
        },
        set: (newInstances) => {
          this.websockets = newInstances
          // throw new Error('websockets can not be set through FabrixApp, check spool-websockets instead')
        },
        enumerable: true,
        configurable: true
      }
    }
  }

  /**
   * Validate Configuration
   */
  async validate () {
    // const requiredSpools = [ 'router' ]
    // const spools = Object.keys(this.app.spools)
    //
    // if (!spools.some(v => requiredSpools.indexOf(v) >= 0)) {
    //   return Promise.reject(new Error(`spool-websockets requires spools: ${ requiredSpools.join(', ') }!`))
    // }

    if (!this.app.config.get('websockets')) {
      return Promise.reject(new Error('No configuration found at config.websockets!'))
    }

    return Promise.all([
      Validator.validateWebsocketsConfig(this.app.config.get('websockets'))
    ])
      .catch(err => {
        return Promise.reject(err)
      })
  }

  /**
   * Check if there some stores, if not set a default one
   */
  configure() {
    this.websockets = {}
  }

  /**
   * create caching stores
   */
  async initialize() {
    return Websockets.init(this.app)
  }

  /**
   * unload caching stores
   */
  async unload() {
    return Websockets.unload(this.app)
  }
}
