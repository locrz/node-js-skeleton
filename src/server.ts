import "reflect-metadata";

import express, { Response } from "express";
import "express-async-errors";
import cors from "cors";

import routes from "./routes";

import "./database";
import AppError from "./errors/AppError";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((error: Error, _: any, response: Response) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

app.listen(3333, () => {
  console.log("🟢 Server listen on port 3333!");
});
