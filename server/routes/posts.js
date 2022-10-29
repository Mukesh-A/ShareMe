import express from "express";
import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

//this will not run by / instead /post
//because first page which run is index page their we have defines /post so then it will com to this page and start executing
router.get("/", getPosts);
router.get("/", createPost);

export default router;
