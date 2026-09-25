import SocialLinks from "./SocialLinks";
import FeaturedProjects from "./FeaturedProjects";

export default function Hero() {
  return (
    <section className="hero">
      <div className="section-label">
        ... /Creative developer ...
      </div>

      <h1 className="hero-title">
        <span>Creative</span>
        <span>Developer</span>
      </h1>

      <p className="hero-description">
        I build digital experiences where
        technology meets creativity.
      </p>

      <a
        href="#projects"
        className="projects-button"
      >
        Projects ↗
      </a>

      <SocialLinks />

      <FeaturedProjects />
    </section>
  );
}