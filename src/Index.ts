import 'dotenv/config';
import { Server } from './Server';
import App from './App';

async function start() {
    const server = new Server(new App());
    server.startServer();
}

start().then();