import * as acc from "accepts";
import { HttpPipe, request } from "funkster-http";

export type AcceptHeaders = acc.Accepts;

export function parseAcceptHeaders(handler: (headers: AcceptHeaders) => HttpPipe): HttpPipe {
  return request(req => {
    const parsedAccepts = acc(req);
    return handler(parsedAccepts);
  });
}
