import accepts = require("accepts");
import { HttpPipe, request } from "funkster-http";

export interface AcceptHeaders extends accepts.Accepts { }

export function parseAcceptHeaders(handler: (headers: AcceptHeaders) => HttpPipe): HttpPipe {
    return request(req => {
        const parsedAccepts = accepts(req);
        return handler(parsedAccepts);
    });
}
