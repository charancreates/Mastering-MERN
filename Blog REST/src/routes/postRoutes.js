import Router from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controllers/postControllers.js";

const router = Router();

router.route("/").get(getPosts).post(createPost);
router.route("/:id").get(getPost).delete(deletePost).put(updatePost);

export default router;
