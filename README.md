# spool-websockets

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build Status][ci-image]][ci-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Follow @FabrixApp on Twitter][twitter-image]][twitter-url]

:package: Websockets Spool


## Install
```sh
$ npm install --save @fabrix/spool-websockets
```

## Configure

```js
// config/main.ts
import { WebsocketsSpool } from '@fabrix/spool-websockets'
export const main = {
  spools: [
    // ... other spools
    WebsocketsSpool
  ]
}
```

## Configuration

```
// config/websockets.ts
export const websockets = {
  allowLocalFilesAccess: true,
    printDelay: 100,
    paperSize: {
      format: 'Letter',
      height: '11in',
      width: '8.5in'
    },
    format: {
      quality: 100
    }
}
```

For more information about store (type and configuration) please see the websockets documentation.

## Usage

```js
  this.app.websockets.htmlToWEBSOCKETS('<h1>Hello World</h1>')
  .then(websockets => {
    // Do something with your WEBSOCKETS
  })
```

[npm-image]: https://img.shields.io/npm/v/@fabrix/spool-websockets.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@fabrix/spool-websockets
[ci-image]: https://img.shields.io/circleci/project/github/fabrix-app/spool-websockets/master.svg
[ci-url]: https://circleci.com/gh/fabrix-app/spool-websockets/tree/master
[daviddm-image]: http://img.shields.io/david/fabrix-app/spool-websockets.svg?style=flat-square
[daviddm-url]: https://david-dm.org/fabrix-app/spool-websockets
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/fabrix-app/fabrix
[twitter-image]: https://img.shields.io/twitter/follow/FabrixApp.svg?style=social
[twitter-url]: https://twitter.com/FabrixApp
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/fabrix-app/spool-websockets.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/fabrix-app/spool-websockets/coverage

