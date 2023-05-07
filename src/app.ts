import express, { Express } from "express";

import { Server } from "./setupServer.js";

class Application {
  public initialize(): void {
    // create an instance of the express Application
    const app: Express = express();

    // pas express Application to the constructor of the instance of the Server class
    const server: Server = new Server(app);

    server.start();
  }
}

const application: Application = new Application();

application.initialize();
