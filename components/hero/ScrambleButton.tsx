"use client";

interface ScrambleButtonProps {
  text: string;
}

export default function ScrambleButton({
  text,
}: ScrambleButtonProps) {
  return (
    <button className="scramble-button">
      {text}
    </button>
  );
}