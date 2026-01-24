import express, { type Application } from "express";
import { postRouter } from "./modules/post/post.route";

const app: Application = express();

app.use(express.json());

app.use("/posts", postRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the MapMyThought App!");
});

export default app;
