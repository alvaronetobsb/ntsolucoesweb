import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Primeiro verifique se o usuário já definiu uma preferência
    const savedTheme = localStorage.getItem("theme");

    // Se não houver preferência salva, use a preferência do sistema
    if (savedTheme === null) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      // Salva a preferência do sistema para futuras visitas
      localStorage.setItem("theme", prefersDark ? "dark" : "light");
      return prefersDark;
    }

    // Caso contrário, use a preferência salva
    return savedTheme === "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Adiciona um listener para mudanças de tema do sistema e atualiza quando o sistema mudar
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      // Só atualiza automaticamente se o usuário não tiver definido uma preferência manual
      const userHasSetPreference =
        localStorage.getItem("theme-manually-set") === "true";
      if (!userHasSetPreference) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Marca que o usuário escolheu manualmente um tema
    localStorage.setItem("theme-manually-set", "true");
  };

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
    >
      {isDark ? (
        <>
          <Sun size={20} />
          <span>Claro</span>
        </>
      ) : (
        <>
          <Moon size={20} />
          <span>Escuro</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
