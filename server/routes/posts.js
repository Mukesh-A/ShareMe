import express from "express";
import { getPosts, createPost, updatePost } from "../controllers/posts.js";

const router = express.Router();

//this will not run by / instead /post
//because first page which run is index page their we have defines /post so then it will com to this page and start executing
router.get("/", getPosts);
router.post("/", createPost);
//patch is used for update the existing things
router.patch("/:id", updatePost);

export default router;
