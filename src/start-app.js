import { startHttpServer } from './http-server.js';
import { startTcpServer } from './tcp-server.js';

const PORT = Number(process.env.PORT ?? '8080');
const TCP_PORT = Number(process.env.TCP_PORT ?? '4040');
const PUBLIC_TCP_PORT = Number(process.env.PUBLIC_TCP_PORT ?? '4040');

startTcpServer({ port: TCP_PORT });

startHttpServer({ port: PORT, publicTcpPort: PUBLIC_TCP_PORT });
