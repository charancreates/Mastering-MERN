import Router from "router";
import { createNote, getNotes } from "../controllers/noteControllers.js";

const NoteRouter = Router();

NoteRouter.route("/").post(createNote).get(getNotes);

export default NoteRouter;
