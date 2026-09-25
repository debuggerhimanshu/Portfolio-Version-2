import ProjectRow from "./ProjectRow";

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
    >
      <div className="section-heading">
        <span>... /Projects ...</span>

        <h2>Projects</h2>
      </div>

      <div className="project-list">
        <ProjectRow
          number="01"
          title="DeepTrust"
          category="AI / Cybersecurity"
          year="2026"
        />

        <ProjectRow
          number="02"
          title="CampusFlow"
          category="Software Development"
          year="2026"
        />

        <ProjectRow
          number="03"
          title="CipherNote"
          category="Security"
          year="2026"
        />

        <ProjectRow
          number="04"
          title="AI IoT Vulnerability Scanner"
          category="Cybersecurity / AI"
          year="2026"
        />
      </div>
    </section>
  );
}