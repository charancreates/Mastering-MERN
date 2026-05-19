import { posts } from "../../data/posts.js";
import createError from "http-errors";

export const getPosts = (req, res) => {
  console.log("yo");
  res.json(posts);
};

export const getPost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return next(createError(404, "Post does not exist"));
  }
  res.json(post);
};

export const postPost = (req, res) => {
  const id = posts.length + 1;
  const newPost = { id, ...req.body };
  posts.push(newPost);
  res.json(newPost);
};

export const deletePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((post) => post.id === id);
  if (index == -1) {
    return next(createError(404, "Post does not exist"));
  }
  posts.splice(index, 1);
  res.json(posts);
};

export const updatePost = (req, res, next) => {
  const id = parseInt(req.params.id);
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) {
    return next(createError(404, "Post does not exist"));
  }

  const update = req.body;
  posts[index] = { ...posts[index], ...update };
  res.json(posts[index]);
};
