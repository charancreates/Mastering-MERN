import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);
  console.log(users);
  return (
    <>
      <h1>The Users are</h1>
      {users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id}>
          <p>{user.name}</p>
        </Link>
      ))}
    </>
  );
}

export default Users;
