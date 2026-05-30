import { io } from "socket.io-client";
import { useState, useEffect } from "react";
const socket = io("http://localhost:3000");
export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [room, setRoom] = useState("");
  const [user, setUser] = useState("");
  const [online, setOnline] = useState([]);

  const [isConnected, setIsConnected] = useState(socket.connected);
  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }
    function onDisconnect() {
      setIsConnected(false);
    }
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("onlineUsers", (data) => {
      setOnline(Object.values(data));
    });
    socket.on("message", (data) => {
      setMessages((prev) => [data, ...prev]);
    });
    socket.on("history", (data) => {
      setMessages(data.map((m) => m.text));
    });
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("message");
      socket.off("onlineUsers");
    };
  }, []);

  function sendMessage() {
    socket.emit("message", { room: room, text: message, username: user });
    setMessage("");
  }
  function joinRoom() {
    console.log("joining room:", room);
    socket.emit("join", { room: room, username: user });
  }
  return (
    <>
      <h1>Message</h1>
      <p style={{ color: isConnected ? "green" : "red", fontWeight: "bold" }}>
        Status: {isConnected ? "Connected 🟢" : "Disconnected 🔴"}
      </p>
      <label>
        Username :
        <input value={user} onChange={(e) => setUser(e.target.value)} />
      </label>
      <div>.</div>
      <label>
        Message :
        <input value={message} onChange={(e) => setMessage(e.target.value)} />
      </label>
      <button onClick={sendMessage}>send</button>
      <div>.</div>
      <label>
        Room :
        <input value={room} onChange={(e) => setRoom(e.target.value)} />
      </label>
      <button onClick={joinRoom}>join</button>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <div>
        <h2>online users</h2>
        {online.map((u, index) => (
          <p key={index}>{u.username}</p>
        ))}
      </div>
    </>
  );
}
