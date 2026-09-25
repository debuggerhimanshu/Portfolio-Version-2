interface ToolNodeProps {
  name: string;
}

export default function ToolNode({
  name,
}: ToolNodeProps) {
  return (
    <button className="tool-node">
      {name}
    </button>
  );
}