import { asRequestListener, Ok } from 'funkster-http'
import * as http from 'http'
import * as request from 'supertest'

import { parseAcceptHeaders } from '../src'

describe('When the Accept* headers are parsed', () => {
  describe('and the Accept header is analyzed', () => {
    const pipe = parseAcceptHeaders(acc => Ok(JSON.stringify(acc.types())))
    const server = http.createServer(asRequestListener(pipe))

    describe('and the request does not contain one', () => {
      it('should parse the wildcard type', () =>
        request(server)
          .get('/')
          .expect(200, JSON.stringify(['*/*'])))
    })

    describe('and the request does contain only json', () => {
      it('should parse application/json', () =>
        request(server)
          .get('/')
          .accept('application/json')
          .expect(200, JSON.stringify(['application/json'])))
    })

    describe('and the request does contain json and html', () => {
      it('should parse application/json and text/html', () =>
        request(server)
          .get('/')
          .accept('application/json, text/html')
          .expect(200, JSON.stringify(['application/json', 'text/html'])))
    })
  })

  describe('and the Accept-Charset header is analyzed', () => {
    const pipe = parseAcceptHeaders(acc => Ok(JSON.stringify(acc.charsets())))
    const server = http.createServer(asRequestListener(pipe))

    describe('and the request does not contain one', () => {
      it('should parse the wildcard type', () =>
        request(server)
          .get('/')
          .expect(200, JSON.stringify(['*'])))
    })

    describe('and the request does contain only utf-8', () => {
      it('should parse the the correct charset', () =>
        request(server)
          .get('/')
          .set('Accept-Charset', 'utf-8')
          .expect(200, JSON.stringify(['utf-8'])))
    })

    describe('and the request does contain utf-8 and ascii', () => {
      it('should parse the the correct charset', () =>
        request(server)
          .get('/')
          .set('Accept-Charset', 'utf-8, ascii')
          .expect(200, JSON.stringify(['utf-8', 'ascii'])))
    })
  })

  describe('and the Accept-Encoding header is analyzed', () => {
    const pipe = parseAcceptHeaders(acc => Ok(JSON.stringify(acc.encodings())))
    const server = http.createServer(asRequestListener(pipe))

    describe('and the request does not contain one', () => {
      it('should parse the supertest defaults', () =>
        request(server)
          .get('/')
          .expect(200, JSON.stringify(['gzip', 'deflate', 'identity'])))
    })

    describe('and the request does contain only gzip', () => {
      it('should parse the the correct encodings', () =>
        request(server)
          .get('/')
          .set('Accept-Encoding', 'gzip')
          .expect(200, JSON.stringify(['gzip', 'identity'])))
    })

    describe('and the request does contain gzip and deflate', () => {
      it('should parse the the correct encodings', () =>
        request(server)
          .get('/')
          .set('Accept-Encoding', 'gzip, deflate')
          .expect(200, JSON.stringify(['gzip', 'deflate', 'identity'])))
    })
  })

  describe('and the Accept-Language header is analyzed', () => {
    const pipe = parseAcceptHeaders(acc => Ok(JSON.stringify(acc.languages())))
    const server = http.createServer(asRequestListener(pipe))

    describe('and the request does not contain one', () => {
      it('should parse the wildcard type', () =>
        request(server)
          .get('/')
          .expect(200, JSON.stringify(['*'])))
    })

    describe('and the request does contain only fr', () => {
      it('should parse the the correct language', () =>
        request(server)
          .get('/')
          .set('Accept-Language', 'fr')
          .expect(200, JSON.stringify(['fr'])))
    })

    describe('and the request does contain fr-CH, fr;q=0.9, en;q=0.8', () => {
      it('should parse the the correct encodings', () =>
        request(server)
          .get('/')
          .set('Accept-Language', 'fr-CH, en;q=0.8, fr;q=0.9')
          .expect(200, JSON.stringify(['fr-CH', 'fr', 'en'])))
    })
  })
})
