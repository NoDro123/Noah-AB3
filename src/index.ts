import express from 'express';
import http from 'http';
import { Request, Response } from 'express';
import os from 'os';

// Create the express server
const app = express();
const server = http.createServer(app);

// route for / that returns a simple html page with the hostname
app.get('/', (req: Request, res: Response) => {
  res.send(`<h1>Hello World!</h1><p>Host: ${os.hostname()}</p>`);
});
app.get('/log/time', (_req: Request, res: Response) => {
  const currentTime = new Date().toISOString();
  // eslint-disable-next-line no-console
  console.log(`Current time: ${currentTime}`);
  res.send(`Logged time: ${currentTime}`);
});
const serverPort = process.env.PORT || 3000;
server.listen(serverPort, () => {
  // eslint-disable-next-line no-console
  console.log(`Express Server started on port ${serverPort}`);
});
