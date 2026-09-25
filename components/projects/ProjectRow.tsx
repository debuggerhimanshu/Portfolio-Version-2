interface ProjectRowProps {
  number: string;
  title: string;
  category: string;
  year: string;
}

export default function ProjectRow({
  number,
  title,
  category,
  year,
}: ProjectRowProps) {
  return (
    <article className="project-row">
      <span>{number}</span>

      <h3>{title}</h3>

      <span>{category}</span>

      <span>{year}</span>
    </article>
  );
}