export default function FeaturedProjects() {
  return (
    <div className="featured-projects">

      {/* LEFT PROJECT */}
      <article className="featured-card featured-card-side">
        <div className="featured-card-number">
          01
        </div>

        <h3>CampusFlow</h3>

        <p>
          Campus management and
          workflow platform.
        </p>

        <span className="featured-card-link">
          ←
        </span>
      </article>


      {/* CENTER PROJECT */}
      <article className="featured-card featured-card-main">

        <div className="featured-project-image">
          <div className="featured-image-mark">
            DT
          </div>
        </div>

        <div className="featured-project-content">

          <span className="featured-project-meta">
            02 / FEATURED PROJECT
          </span>

          <h3>
            DeepTrust
          </h3>

          <p>
            AI-powered deepfake audio and
            video detection platform.
          </p>

          <button>
            Read more
            <span>→</span>
          </button>

        </div>

      </article>


      {/* RIGHT PROJECT */}
      <article className="featured-card featured-card-side featured-card-next">

        <div className="featured-card-number">
          03
        </div>

        <h3>
          CipherNote
        </h3>

        <p>
          Secure encrypted
          note-taking application.
        </p>

        <span className="featured-card-link">
          →
        </span>

      </article>

    </div>
  );
}