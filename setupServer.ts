// Contains
// - server startup code
// - handlers

import {
  Application,
  json,
  Response,
  Request,
  NextFunction,
  urlencoded,
} from "express";

import http from "http";

import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import cookieSession from "cookie-session";
import "express-async-errors";

const compression = require("compression");
const HTTP_STATUS = require("http-status-code");

export class Server {
  private app: Application; // creates an instance of the express app

  constructor(app: Application) {
    this.app = app;
  }

  public start(): void {
    this.securityMiddleware(this.app);
    this.standardMiddleware(this.app);
    this.routeMiddleware(this.app);
    this.globalErrorHandler(this.app);
    this.startServer(this.app);
  }

  private securityMiddleware(app: Application): void {
    app.use(
      cors({
        origin: "*",
        credentials: true,
        optionsSuccessStatus: 200,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      })
    );
    app.use(
      cookieSession({
        name: "session",
        keys: ["test1", "test2"],
        maxAge: 24 * 7 * 3600000,
        secure: false,
      })
    );
    app.use(hpp());
    app.use(helmet());
  }

  private standardMiddleware(app: Application): void {
    app.use(compression());
    app.use(
      json({
        limit: "50mb",
      })
    );
  }

  private routeMiddleware(app: Application): void {}

  private globalErrorHandler(app: Application): void {}

  private startServer(app: Application): void {}

  private createSocketIO(httpServer: http.Server): void {}

  private startHttpServer(httpServer: http.Server): void {}
}
