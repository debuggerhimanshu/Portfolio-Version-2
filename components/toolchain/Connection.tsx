interface ConnectionProps {
  active?: boolean;
}

export default function Connection({
  active = false,
}: ConnectionProps) {
  return (
    <div
      className={`tool-connection ${
        active ? "active" : ""
      }`}
    />
  );
}