import Router from "express";
import {
  deletePost,
  getPost,
  getPosts,
  postPost,
  updatePost,
} from "../controllers/postControllers.js";

const router = Router();

router.route("/").get(getPosts).post(postPost);
router.route("/:id").get(getPost).delete(deletePost).put(updatePost);

export default router;
