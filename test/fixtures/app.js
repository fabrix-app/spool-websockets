'use strict'

module.exports = {
  pkg: {
    name: require('../../package').name + '-test'
  },
  api: {
    models: {},
    controllers: {},
    services: {}
  },
  config: {
    websockets: {

    },
    main: {
      spools: [
        require('../../dist').WebsocketsSpool
      ]
    }
  }
}


