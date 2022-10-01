import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { io } from "socket.io-client";
import Feed from "./feed";

const App = () => {
  const [feeds, setFeeds] = useState([]);
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState();

  useEffect(() => {
    const s = io("http://localhost:3000", {
      transports: ["websocket", "polling", "flashsocket"],
    });
    setSocket(s);
    console.log("mounted", socket);
    s.on("connect", () => {
      setFeeds((prevFriends) => [...prevFriends, "connected"]);
    });

    s.on("dispatchMessage", (newMessage) => {
      setFeeds((prevFriends) => [...prevFriends, newMessage]);
    });
  }, []);

  useEffect(() => {
    console.log("feeds updated", feeds);
  }, [feeds]);

  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit("sendMessage", message);
    setMessage("");
  };

  return (
    <div id="app">
      <Feed feeds={feeds} />
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" value="Submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default App;
