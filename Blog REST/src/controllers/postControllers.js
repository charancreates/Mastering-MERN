import createError from "http-errors";
import { Post } from "../../models/postSchema.js";
import { User } from "../../models/userSchema.js";

export const getPosts = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.author) {
      filter.author = req.query.author;
    }
    if (req.query.published) {
      filter.isPublished = req.query.published === "true";
    }

    let query = Post.find(filter).populate("author");
    if (req.query.sort === "newest") {
      query = query.sort({ createdAt: -1 });
    }

    const posts = await query;
    res.json(posts);
  } catch (error) {
    return next(error);
  }
};

export const getPost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return next(createError(404, "Post not found"));
    res.json(post);
  } catch (error) {
    return next(error);
  }
};

export const createPost = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);
    res.json(post);
  } catch (error) {
    return next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    return next(error);
  }
};

export const deletePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return next(createError(404, "Post does not exist"));
    }
    res.json({ message: "post deleted successfully" });
  } catch (error) {
    return next(error);
  }
};

export const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!post) {
      return next(createError(404, "Post does not exist"));
    }
    res.json(post);
  } catch (error) {
    return next(error);
  }
};
