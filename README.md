# funkster-http-headers-accept

[![npm](https://img.shields.io/npm/v/funkster-http-headers-accept.svg)](https://www.npmjs.com/package/funkster-http-headers-accept)
[![node](https://img.shields.io/node/v/funkster-http-headers-accept.svg)](http://nodejs.org/download/)
[![npm](https://img.shields.io/npm/dt/funkster-http-headers-accept.svg)](https://www.npmjs.com/package/funkster-http-headers-accept)
[![Known Vulnerabilities](https://snyk.io/test/github/bomret/funkster-http-headers-accept/badge.svg)](https://snyk.io/test/github/bomret/funkster-http-headers-accept)
[![bitHound](https://img.shields.io/bithound/code/github/Bomret/funkster-http-headers-accept.svg)](https://www.bithound.io/github/Bomret/funkster-http-headers-accept)
[![Travis](https://travis-ci.org/Bomret/funkster-http-headers-accept.svg?branch=master)](https://travis-ci.org/Bomret/funkster-http-headers-accept)

Funkster is a compositional server library. This package contains combinators to parse the HTTP Accept\* headers of a request.

## Install
```bash
$ npm install funkster-http-headers-accept
```

[Typscript](http://www.typescriptlang.org/) is used to illustrate the examples.

## Parsing the Accept\* headers from a request

This module uses the [accepts](https://www.npmjs.com/package/accepts) package so essentially the same api applies for the parsed headers object.

```javascript
import * as http from 'http';
import { parseAcceptHeaders } from 'funkster-http-headers-accept';
import { asRequestListener, Ok } from 'funkster-http';

const pipe = parseAcceptHeaders(headers => Ok(headers.type('json')));
const server = http.createServer(asRequestListener(greet));

// start the node HTTP server and send e.g. a GET with the Accept header set to 'application/json'.
```
