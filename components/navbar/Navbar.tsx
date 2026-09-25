export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        Himanshu
        <br />
        Ranjan
      </div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#toolchain">Toolchain</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="language">
        <span>En</span>
      </div>
    </nav>
  );
}