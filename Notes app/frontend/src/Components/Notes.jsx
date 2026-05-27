import { useState, useEffect } from "react";
import api from "../axiosinstance";
import toast from "react-hot-toast";

export default function Notes() {
  const [isOpen, setIsopen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });
  useEffect(() => {
    async function getNotes() {
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getNotes();
  }, []);

  async function deletePost(id) {
    try {
      await api.delete(`/notes/${id}`);
      toast.success("deleted successfully");
      setNotes(notes.filter((note) => note._id != id));
    } catch (error) {
      console.log(error);
    }
  }

  async function createNote(e) {
    e.preventDefault();
    try {
      const res = await api.post("/notes", form);
      setNotes([res.data, ...notes]);
      setForm({ title: "", content: "" });
      setIsopen(false);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h1>Your notes</h1>
      <button
        onClick={() => setIsopen(true)}
        className="bg-amber-400 text-black font-bold py-2 px-6 rounded-xl hover:bg-amber-300 transition-colors shadow-lg">
        Create notes
      </button>
      {isOpen ? (
        <div className="flex justify-center mt-10 w-full">
          <form className="bg-gray-800/50 p-6 rounded-3xl flex flex-col gap-4 max-w-lg w-full border border-gray-600 shadow-2xl">
            <input
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="bg-transparent text-white text-2xl font-bold placeholder-gray-400 focus:outline-none"
            />
            <textarea
              placeholder="Take a note..."
              rows="5"
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="bg-transparent text-gray-200 resize-none placeholder-gray-500 focus:outline-none"
            />
            <div className="flex justify-end mt-2">
              <button
                onClick={createNote}
                type="submit"
                className="bg-amber-400 text-black font-bold py-2 px-6 rounded-xl hover:bg-amber-300 transition-colors shadow-lg">
                Save Note
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div></div>
      )}

      <div className="flex flex-wrap">
        {notes.map((note) => (
          <div key={note._id}>
            <div className="w-50 h-50 border border-amber-400 m-3">
              <h3>{note.title}</h3> <hr className="border border-amber-600" />
              <p>{note.content}</p>
            </div>
            <button
              onClick={() => deletePost(note._id)}
              className="text-white text-xs bg-red-600 p-1 rounded-xs ">
              Detete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
