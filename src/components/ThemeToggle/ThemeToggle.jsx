import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return saved ? saved === "dark" : prefersDark;
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button
      className="theme-toggle-btn"
      onClick={() => setIsDark(!isDark)}
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
