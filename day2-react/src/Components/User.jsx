import { useState, useEffect } from "react";
function Users() {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [input, setInput] = useState("");
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setLoading(false);
        setUsers(data);
      } catch (e) {
        console.log(e);
        setError(true);
        setLoading(false);
      }
    }
    getData();
  }, []);

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <label>
        Search
        <input type="text" value={input} onChange={handleInputChange} />
      </label>
      <h2>The Usernames are</h2>
      {loading ? (
        <p>Laoding...</p>
      ) : error ? (
        <p>Something went wrong</p>
      ) : (
        user
          .filter((user) =>
            user.name.toLowerCase().includes(input.toLowerCase())
          )
          .map((user) => <p key={user.id}>{user.name}</p>)
      )}
    </>
  );
}
export default Users;
