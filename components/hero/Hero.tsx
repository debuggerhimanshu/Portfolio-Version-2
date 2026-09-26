"use client";

import SocialLinks from "./SocialLinks";
import FeaturedProjects from "./FeaturedProjects";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* =================================================
          CONTAINER 1
      ================================================= */}

      <div className="hero-container-1">

        {/* ===============================================
            CONTAINER 1.1
            Creative + Projects CTA
        =============================================== */}

        <div className="hero-container-1-1">

          {/* CONTAINER 1.1.1 */}
          <div className="hero-container-1-1-1">

            <h1 className="hero-creative">
              Facinated
            </h1>

          </div>


          {/* CONTAINER 1.1.2 */}
          <div className="hero-container-1-1-2">

            <a
              href="#projects"
              className="hero-project-button"
            >
              <span className="hero-project-label">
                Download Resume
              </span>

              <span className="hero-project-arrow">
                →
              </span>
            </a>

          </div>

        </div>


        {/* ===============================================
            CONTAINER 1.2
            Description + Developer
        =============================================== */}

        <div className="hero-container-1-2">

          {/* CONTAINER 1.2.1 */}
          <div className="hero-container-1-2-1">

            <p className="hero-description">
              I design and build{" "}
              <em>digital experiences</em>{" "}
              that bring together{" "}
              <em>software</em>,{" "}
              <em>cybersecurity</em>,{" "}
              <em>AI</em>, and{" "}
              <em>visual design</em>{" "}
               turning technical ideas into interfaces
              that feel <em>clear, expressive, and useful</em>.
            </p>

          </div>


          {/* CONTAINER 1.2.2 */}
          <div className="hero-container-1-2-2">

            <h2 className="hero-developer">
              Developer
            </h2>

          </div>

        </div>

      </div>


      {/* =================================================
          CONTAINER 2
          SOCIAL LINKS
      ================================================= */}

      <div className="hero-container-2">

        <SocialLinks />

      </div>


      {/* =================================================
          CONTAINER 3
          FEATURED PROJECTS
      ================================================= */}

      <div className="hero-container-3">

        <FeaturedProjects />

      </div>

    </section>
  );
}