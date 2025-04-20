import express from 'express'
import cors from 'cors'
import { createServer } from 'node:http';
import routes from '@/routes';
import { httpLogger } from '@/common/http-loger';
import serveStatic from "serve-static"
import responseTime from 'response-time';
import "@/database/connect";
import { Server } from 'socket.io';
import { __dirname } from '@/dirname';
import serveIndex from 'serve-index';
import path from 'node:path';
import globalMiddleware from '@/middleware/request-common';
import { existsSync, mkdirSync } from 'node:fs';
import { STORAGE_PATH } from '@/constants/storagePath';
if (!existsSync(STORAGE_PATH)) {
    mkdirSync(STORAGE_PATH)
}
const indexStorage = serveIndex(path.join(STORAGE_PATH, "public"), { icons: true });
const serveStorage = serveStatic(path.join(STORAGE_PATH, "public"), { index: ['index.html'] });
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(responseTime())
app.use('/files', serveStorage, indexStorage);
app.use(httpLogger)
app.use(globalMiddleware());
app.use('/api', routes);
const server = createServer(app);
const io = new Server(server, { cors: { origin: '*' } });
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

export default server;
