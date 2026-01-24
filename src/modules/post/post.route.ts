import express, { Router } from "express";
import { postController } from "./post.controller";

const router: Router = express.Router();

router.post("/", postController.createPost);

router.get("/", (req, res) => {
  res.send("Get all posts");
});

export const postRouter: Router = router;