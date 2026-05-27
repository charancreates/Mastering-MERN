import Router from "router";
import {
  createNote,
  deleteNote,
  getNotes,
} from "../controllers/noteControllers.js";
import { requireAuth } from "../middleware/requireAuth.js";

const NoteRouter = Router();

NoteRouter.route("/").post(requireAuth, createNote).get(requireAuth, getNotes);
NoteRouter.route("/:id").delete(requireAuth, deleteNote);

export default NoteRouter;
