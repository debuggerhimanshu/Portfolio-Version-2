export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <span>Himanshu</span>
        <span>Ranjan</span>
      </div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#toolchain">Toolchain</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="language">
        En
      </div>
    </nav>
  );
}