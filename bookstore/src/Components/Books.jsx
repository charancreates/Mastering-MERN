import { useEffect, useState } from "react";
import api from "../axiosInstance";
import toast from "react-hot-toast";
export default function Books() {
  const [books, setBooks] = useState([]);
  const [fileds, setFileds] = useState({ title: "", genre: "", price: "" });
  useEffect(() => {
    async function getBook() {
      try {
        const res = await api.get("/books");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  }, []);
  async function addBook(e) {
    e.preventDefault();
    const res = await api.post("/books", fileds);
    setBooks([...books, res.data]);
    setFileds({ title: "", genre: "", price: "" });
  }
  async function deleteBook(id) {
    try {
      await api.delete(`/books/${id}`);
      setBooks(books.filter((book) => book._id !== id));
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }
  return (
    <>
      {books.map((book) => (
        <div key={book._id}>
          {book.title}: Rs {book.price}
          <button className="pl-2 p-1" onClick={() => deleteBook(book._id)}>
            👉🏻🗑️
          </button>
        </div>
      ))}
      <form onSubmit={addBook}>
        <label className="flex items-center justify-center gap-4 m-10 text-white ">
          Title
          <input
            onChange={(e) => setFileds({ ...fileds, title: e.target.value })}
            value={fileds.title}
            className=" bg-gray-800 border border-gray-500 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500"
          />
        </label>
        <label className="flex items-center justify-center gap-4 m-10 text-white ">
          Genre
          <input
            value={fileds.genre}
            onChange={(e) => setFileds({ ...fileds, genre: e.target.value })}
            className=" bg-gray-800 border border-gray-500 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500"
          />
        </label>
        <label className="flex items-center justify-center gap-4 m-10 text-white ">
          Price
          <input
            value={fileds.price}
            type="Number"
            onChange={(e) => setFileds({ ...fileds, price: e.target.value })}
            className=" bg-gray-800 border border-gray-500 rounded-md px-4 py-2 text-white focus:outline-none focus:border-blue-500"
          />
        </label>
        <button
          type="submit"
          className="bg-gray-800 px-10 py-2 rounded-3xl text-white border border-gray-500 hover:border-blue-500">
          Add Book
        </button>
      </form>
    </>
  );
}
