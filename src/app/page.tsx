import React, { useState } from "react";
import Image from "next/image";

interface Message {
  id: string;
  content: string;
  price?: number;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [content, setContent] = useState("");
  const [price, setPrice] = useState<number>(0);

  function createMessage() {
    const uniqueId = Math.random().toString(36).substring(2, 10);
    const newMessage = { id: uniqueId, content, price };
    setMessages([...messages, newMessage]);
    alert(`Message link: /messages/${uniqueId}`);
  }

  return (
    <main style={{ padding: "1rem" }}>
      <h1>Anonymous Messaging POC</h1>
      <div>
        <input
          placeholder="Enter your secret message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <input
          type="number"
          placeholder="Set LTC Price"
          value={price || ""}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <button onClick={createMessage}>Create Message Link</button>
      </div>

      {/* List of messages for demo */}
      <div>
        {messages.map((msg) => (
          <div key={msg.id} style={{ margin: "1rem 0" }}>
            <p>
              ID: {msg.id} - {msg.content} (Price: {msg.price} LTC)
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}
