import express, { Express } from "express";

import databaseConnection from "./setupDatabase";

import { config } from "./config";

import { Server } from "./setupServer";

class Application {
  public initialize(): void {
    this.loadConfig(); // run loadConfig private method to load and validate configs
    databaseConnection(); // connect to database

    // create an instance of the express Application
    const app: Express = express();

    // pas express Application to the constructor of the instance of the Server class
    const server: Server = new Server(app);

    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
  }
}

const application: Application = new Application();

application.initialize();
