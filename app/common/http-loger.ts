import { color } from "console-log-colors";
import morgan from "morgan";

export const httpLogger = morgan(function (tokens: any, req, res) {
    return [
        color.green(tokens.method(req, res)),
        color.red(tokens.url(req, res)),
        color.yellow(tokens.status(req, res)),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms'
    ].join(' ')
})