import React from "react";

interface MessageCardProps {
  message: string;
  price?: number;
}

export function MessageCard({ message, price }: MessageCardProps) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem" }}>
      <p>{message}</p>
      {price && <p>Price to reveal: {price} LTC</p>}
    </div>
  );
}
