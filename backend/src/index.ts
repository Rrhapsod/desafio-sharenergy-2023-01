import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { Error } from "./utils/Error";
import { connectDatabase } from "./database/db";

import { userRoutes } from "./routes/userRoutes";
import { clientRoutes } from "./routes/clientRoutes";

const app = express();
app.use(express.json());

const port = 3000;

connectDatabase();

app.use(userRoutes);
app.use(clientRoutes);

app.use(
  (error: any, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(error.statusCode).json({
        status: "Erro",
        message: error.message,
      });
    }
    console.error(error);

    return response.status(500).json({
      status: "Erro",
      message: "Erro interno do servidor",
    });
  }
);

app.listen(port, () => console.log(`Server running on port ${port}`));
