# funkster-http-headers-accept

[![npm](https://img.shields.io/npm/v/funkster-http-headers-accept.svg?style=flat-square)](https://www.npmjs.com/package/funkster-http-headers-accept)
[![node](https://img.shields.io/node/v/funkster-http-headers-accept.svg?style=flat-square)](http://nodejs.org/download/)
[![npm](https://img.shields.io/npm/dt/funkster-http-headers-accept.svg?style=flat-square)](https://www.npmjs.com/package/funkster-http-headers-accept)
[![Known Vulnerabilities](https://snyk.io/test/github/bomret/funkster-http-headers-accept/badge.svg?style=flat-square)](https://snyk.io/test/github/bomret/funkster-http-headers-accept)
[![bitHound](https://img.shields.io/bithound/code/github/Bomret/funkster-http-headers-accept.svg?style=flat-square)](https://www.bithound.io/github/Bomret/funkster-http-headers-accept)
[![Travis](https://img.shields.io/travis/Bomret/funkster-http-headers-accept.svg?style=flat-square)](https://travis-ci.org/Bomret/funkster-http-headers-accept)

![Icon](./icon.png)

Funkster is a compositional server library. This package contains combinators to parse the HTTP Accept\* headers of a request.

> [Typscript](http://www.typescriptlang.org/) is used to illustrate the examples.

## Install
```bash
$ npm install funkster-http-headers-accept
```

## Build
```bash
$ npm install && npm run build
```

## Test
```bash
$ npm run test
```

## Parsing the Accept\* headers from a request
This module uses the [accepts](https://www.npmjs.com/package/accepts) package so essentially the same api applies for the parsed headers object.

```javascript
import * as http from 'http';
import { parseAcceptHeaders } from 'funkster-http-headers-accept';
import { asRequestListener, Ok } from 'funkster-http';

const pipe = parseAcceptHeaders(headers => Ok(headers.type('json')));
const server = http.createServer(asRequestListener(pipe));

// start the node HTTP server and send e.g. a GET with the Accept header set to 'application/json'.
```

## Meta
Icon [funky](https://thenounproject.com/search/?q=funky&i=72105) by [iconsmind.com](https://thenounproject.com/imicons/) from the Noun Project.
