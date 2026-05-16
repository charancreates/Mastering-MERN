import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function UserDetail() {
  const [user, setUser] = useState({});
  let { id } = useParams();
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const data = await response.json();
      setUser(data);
    }
    getData();
  }, [id]);

  return (
    <>
      <h1>User Details</h1>
      <h4>Name = {user.name}</h4>
      <h4>Username = {user.username}</h4>
      <h4>Email = {user.email}</h4>
      <h4>City = {user.address?.city}</h4>
    </>
  );
}
