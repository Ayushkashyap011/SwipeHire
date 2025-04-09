import React, { useState, useEffect, useRef } from "react";
import  "../styles/ChatBox.css";
const ChatBox = () => {
  const [messages, setMessages] = useState([
    { text: "Hey! Is this internship remote?", type: "received" },
    { text: "Yes! Fully remote and flexible hours :)", type: "sent" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom when new message added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, type: "sent" }]);
    setInput("");

    // Simulate bot/company response after a second
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Thanks for your message! We’ll get back shortly.", type: "received" },
      ]);
    }, 1000);
  };

  return (
    <aside className="dashboard-chat">
      <div className="chat-header">Messaging</div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </aside>
  );
};

export default ChatBox;
