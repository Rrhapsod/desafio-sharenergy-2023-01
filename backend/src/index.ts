import express from "express";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello Mongo watcher");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
