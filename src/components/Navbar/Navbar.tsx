import { useState, useEffect } from "react";
import "./Navbar.css";
import logoLight from "../../assets/images/nt-logo-1.svg";
import logoDark from "../../assets/images/nt-logo-2.svg";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(() => {
    const theme = localStorage.getItem("theme");
    return theme === "dark";
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "sobre", "workflow", "servicos", "contato"];
      const navHeight = document.querySelector(".nav").offsetHeight;

      // Encontra qual seção está atualmente visível
      let current = "";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adiciona uma margem de 100px para a transição ser mais suave
          if (rect.top <= navHeight + 100 && rect.bottom >= navHeight) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    // Chama uma vez para definir a seção inicial
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          setIsDark(
            document.documentElement.getAttribute("data-theme") === "dark"
          );
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const navHeight = document.querySelector(".nav").offsetHeight;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div>
        <div className="logo-container">
          <img
            src={isDark ? logoDark : logoLight}
            alt="NT Soluções Web"
            className="logo"
          />
          <span className="logo-title">NT Soluções Web</span>
        </div>

        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <a
            href="#home"
            className={`nav-menu-item ${
              activeSection === "home" ? "active" : ""
            }`}
            onClick={(e) => handleClick(e, "#home")}
          >
            Home
          </a>
          <a
            href="#sobre"
            className={`nav-menu-item ${
              activeSection === "sobre" ? "active" : ""
            }`}
            onClick={(e) => handleClick(e, "#sobre")}
          >
            Sobre
          </a>
          <a
            href="#workflow"
            className={`nav-menu-item ${
              activeSection === "workflow" ? "active" : ""
            }`}
            onClick={(e) => handleClick(e, "#workflow")}
          >
            Workflow
          </a>
          <a
            href="#servicos"
            className={`nav-menu-item ${
              activeSection === "servicos" ? "active" : ""
            }`}
            onClick={(e) => handleClick(e, "#servicos")}
          >
            Serviços
          </a>
          <a
            href="#contato"
            className={`nav-menu-item ${
              activeSection === "contato" ? "active" : ""
            }`}
            onClick={(e) => handleClick(e, "#contato")}
          >
            Contato
          </a>
          <ThemeToggle />
        </div>

        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
