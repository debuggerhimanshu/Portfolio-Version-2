import AboutSkills from "./AboutSkills";
import Terminal from "./Terminal";
import ProfileImage from "./ProfileImage";

export default function About() {
  return (
    <section
      id="about"
      className="about-section"
    >
      <div className="section-heading">
        <span>... /About me ...</span>

        <p>
          I'm Himanshu, a creative developer
          interested in software engineering,
          cybersecurity and AI.
        </p>
      </div>

      <div className="about-grid">
        <AboutSkills />

        <div className="about-side">
          <Terminal />
          <ProfileImage />
        </div>
      </div>
    </section>
  );
}