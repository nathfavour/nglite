import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function PrimaryButton({ label, ...props }: ButtonProps) {
  return (
    <button style={{ padding: "0.5rem 1rem", margin: "0.5rem" }} {...props}>
      {label}
    </button>
  );
}
