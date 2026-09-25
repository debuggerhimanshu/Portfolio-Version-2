interface ProjectPreviewProps {
  title: string;
  image: string;
}

export default function ProjectPreview({
  title,
  image,
}: ProjectPreviewProps) {
  return (
    <div className="project-preview">
      <img
        src={image}
        alt={title}
      />
    </div>
  );
}