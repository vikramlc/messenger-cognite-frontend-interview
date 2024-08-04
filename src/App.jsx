import React, { useEffect, useState } from "react";
import FriendList from "./components/FriendList";
import ChatWindow from "./components/ChatWindow";

function App() {
  const [friends] = useState([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ]);

  const [currentFriend, setCurrentFriend] = useState(null);
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(storedMessages);
  }, []);

  const handleSelectFriend = (friend) => {
    setCurrentFriend(friend);
  };

  const handleSendMessage = (message) => {
    if (currentFriend) {
      setMessages((prevMessages) => {
        const updatedMessages = {
          ...prevMessages,
          [currentFriend.id]: [
            ...(prevMessages[currentFriend.id] || []),
            message,
          ],
        };

        localStorage.setItem("messages", JSON.stringify(updatedMessages));

        return updatedMessages;
      });
    }
  };

  return (
    <div className="App">
      <FriendList
        friends={friends}
        onSelectFriend={handleSelectFriend}
        selectedFriend={currentFriend}
      />
      <ChatWindow
        friend={currentFriend}
        messages={currentFriend ? messages[currentFriend.id] || [] : []}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
}

export default App;
