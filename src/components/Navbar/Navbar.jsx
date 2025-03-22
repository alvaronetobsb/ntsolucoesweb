import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/nt-logo-1.svg"; // Ajuste conforme necessário

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="NT Soluções Web" className="logo" />
          <div className="logo-text">
            <span className="logo-title">NT Soluções Web</span>
          </div>
        </div>

        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
          <li>
            <a href="#servicos">Serviços</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
          <li className="theme-toggle">
            <button aria-label="Alternar tema">🌓</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
