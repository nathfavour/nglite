import React, { useState } from "react";

export default function SignIn() {
  const [username, setUsername] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Signed in as: ${username}`);
  }

  return (
    <main style={{ padding: "1rem" }}>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </main>
  );
}
