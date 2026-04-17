import { useEffect, useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("http://54.87.168.21:5000/messages")
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hello Fullstack App 🚀</h1>

      <h2>Messages from MySQL:</h2>

      <h3> I finaly did it. It was not easy at all, it took me days and days.</h3>

      <ul>
        {messages.map((msg) => (
          <li key={msg.id}>{msg.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;