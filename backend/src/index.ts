import express from "express";
import { connectDatabase } from "./database/db";
import { userRoutes } from "./routes/userRoutes";

const app = express();
app.use(express.json());

const port = 3000;

connectDatabase();

app.use(userRoutes);

app.get("/", function (req, res) {
  res.send("Hello Mongo watcher");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
